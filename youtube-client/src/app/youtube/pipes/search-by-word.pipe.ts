import { Pipe, PipeTransform } from '@angular/core';
import { Post } from 'src/types/youtube-data';

@Pipe({
  name: 'searchByWord',
})
export class SearchByWordPipe implements PipeTransform {
  transform = (posts: Post[], searchPhrase: string): Post[] =>
    searchPhrase === ''
      ? []
      : [
          ...posts.filter((post) =>
            post.snippet.title.toLowerCase().includes(searchPhrase.toLowerCase()),
          ),
        ];
}
