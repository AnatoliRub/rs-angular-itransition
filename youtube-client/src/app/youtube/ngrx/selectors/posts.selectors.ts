import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from '../reducers/post.reducer';

import * as fromPosts from '../reducers/post.reducer';

export const selectPostsFeatureSelector = createFeatureSelector<PostsState>('posts');

export const selectPostsSelector = createSelector(selectPostsFeatureSelector, fromPosts.selectAll);

export const selectPostSelector = createSelector(selectPostsFeatureSelector, (state) => state.post);
