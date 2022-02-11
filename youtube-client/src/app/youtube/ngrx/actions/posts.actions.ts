import { createAction, props } from '@ngrx/store';
import { Post } from 'src/types/youtube-data';

export const loadAllPosts = createAction('[Posts Resolver] Load All Posts');

export const allPostsloaded = createAction(
  '[Load Posts Effect] All Posts loaded',
  props<{ posts: Array<Post<string>> }>(),
);

export const loadPost = createAction('[Post Resolver] Load Post', props<{ id: string }>());

export const Postloaded = createAction(
  '[Load Post Effect] Post loaded',
  props<{ post: Post<string> }>(),
);
