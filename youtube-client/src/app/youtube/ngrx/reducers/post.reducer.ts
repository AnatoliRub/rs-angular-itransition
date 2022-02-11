import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Post } from 'src/types/youtube-data';
import { PostsActions } from '../actions/posts-action.types';

export interface PostsState extends EntityState<Post<string>> {
  post?: Post<string>;
}

export const adapter = createEntityAdapter<Post<string>>();

export const initialPostsState = adapter.getInitialState({});

export const postReducer = createReducer(
  initialPostsState,
  on(
    PostsActions.allPostsloaded,
    (state, action): PostsState => adapter.upsertMany(action.posts, state),
  ),
  on(PostsActions.Postloaded, (state, { post }): PostsState => ({ ...state, post })),
);
export const { selectAll } = adapter.getSelectors();

/* export interface PostsState {
  posts: Array<Post<string>>;
}

const initialYoutubePostsState: PostsState = {
  posts: [],
};

export const postReducer = createReducer(
  initialYoutubePostsState,
  on(
    PostsActions.allPostsloaded,
    (state, { posts }): PostsState => ({
      ...state,
      posts,
    }),
  ),
);
 */
