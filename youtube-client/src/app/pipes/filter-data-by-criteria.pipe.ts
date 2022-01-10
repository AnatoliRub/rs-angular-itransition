import { Pipe, PipeTransform } from '@angular/core';
import { Filter, Order } from 'src/types/filtering-criteria-types';
import { Post } from 'src/types/youtube-data';

@Pipe({
  name: 'filterDataByCriteria',
})
export class FilterDataByCriteriaPipe implements PipeTransform {
  transform = (posts: Post[], type: Filter, order?: string, word?: string): Post[] => {
    switch (type) {
      case Filter.Date: {
        return posts.sort((a, b) =>
          order === Order.Desc
            ? new Date(b.snippet.publishedAt).getTime() - new Date(a.snippet.publishedAt).getTime()
            : new Date(a.snippet.publishedAt).getTime() - new Date(b.snippet.publishedAt).getTime(),
        );
      }

      case Filter.View: {
        return posts.sort((a, b) =>
          order === Order.Desc
            ? Number(a.statistics.viewCount) - Number(b.statistics.viewCount)
            : Number(b.statistics.viewCount) - Number(a.statistics.viewCount),
        );
      }

      case Filter.Word: {
        return posts.filter((post) =>
          post.snippet.title.toLowerCase().includes(word!.toLowerCase()),
        );
      }

      default: {
        return posts;
      }
    }

    return posts;
  };
}
