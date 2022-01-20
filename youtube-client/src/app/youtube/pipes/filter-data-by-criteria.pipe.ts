import { Pipe, PipeTransform } from '@angular/core';
import { Filter, Order } from 'src/types/filtering-criteria-types';
import { Post } from 'src/types/youtube-data';

@Pipe({
  name: 'filterDataByCriteria',
})
export class FilterDataByCriteriaPipe implements PipeTransform {
  transform = (posts: Post[], type: Filter, order?: string, word?: string): Post[] => {
    if (Filter.Date === type) {
      return posts.sort((a, b) =>
        order === Order.Desc
          ? new Date(b.snippet.publishedAt).getTime() - new Date(a.snippet.publishedAt).getTime()
          : new Date(a.snippet.publishedAt).getTime() - new Date(b.snippet.publishedAt).getTime(),
      );
    }

    if (Filter.View === type) {
      return posts.sort((a, b) =>
        order === Order.Desc
          ? Number(a.statistics.viewCount) - Number(b.statistics.viewCount)
          : Number(b.statistics.viewCount) - Number(a.statistics.viewCount),
      );
    }

    if (Filter.Word === type) {
      return posts.filter((post) => post.snippet.title.toLowerCase().includes(word!.toLowerCase()));
    }

    return posts;
  };
}
