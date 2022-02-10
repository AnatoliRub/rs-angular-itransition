import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SearchState } from '../reducer/search.reducer';

export const selectSerchFeatureSelector = createFeatureSelector<SearchState>('search');

export const selectSearchWord = createSelector(
  selectSerchFeatureSelector,
  (state) => state.searchWord,
);

export const selectSearchFilter = createSelector(
  selectSerchFeatureSelector,
  (state) => state.filter,
);

export const selectSearchIsShow = createSelector(
  selectSerchFeatureSelector,
  (state) => state.isShow,
);
