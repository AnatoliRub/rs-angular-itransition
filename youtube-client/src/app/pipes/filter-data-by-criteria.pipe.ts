import { Pipe, PipeTransform } from '@angular/core';
import { Post } from 'src/types/youtube-data';
import { Filter, Order } from '../components/filtering-criteria/filtering-criteria.component';

@Pipe({
  name: 'filterDataByCriteria',
})
export class FilterDataByCriteriaPipe implements PipeTransform {
  transform = (posts: Post[], type: string, order: string, word?: string): Post[] => {
    switch (type) {
      case Filter.date: {
        return posts.sort((a, b) =>
          order === Order.desc
            ? new Date(a.snippet.publishedAt).getTime() - new Date(b.snippet.publishedAt).getTime()
            : new Date(b.snippet.publishedAt).getTime() - new Date(a.snippet.publishedAt).getTime(),
        );
        break;
      }
      case Filter.view: {
        return posts.sort((a, b) =>
          order === Order.desc
            ? Number(a.statistics.viewCount) - Number(b.statistics.viewCount)
            : Number(b.statistics.viewCount) - Number(a.statistics.viewCount),
        );
        break;
      }
      case Filter.word: {
        return posts.filter((post) =>
          post.snippet.title.toLowerCase().includes(word!.toLowerCase()),
        );
      }
      default: {
        return posts;
        break;
      }
    }

    return posts;
  };
}
