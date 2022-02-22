import { createReducer, on } from '@ngrx/store';
import { Filter, IFilterData, Order } from 'src/types/filtering-criteria-types';
import { searchActions } from '../actions/search-action.types';

export interface SearchState {
  isShow: boolean;
  searchWord: string;
  filter: IFilterData;
}

export const initialSearchState: SearchState = {
  isShow: false,
  searchWord: '',
  filter: {
    filterType: Filter.Default,
    order: Order.Desc,
  },
};

export const searchReducer = createReducer(
  initialSearchState,
  on(
    searchActions.toggleSearchAction,
    (state): SearchState => ({
      ...state,
      isShow: !state.isShow,
    }),
  ),
  on(
    searchActions.setSearchWord,
    (state, { searchWord }): SearchState => ({
      ...state,
      searchWord,
    }),
  ),
  on(
    searchActions.setSearchFilter,
    (state, { filter }): SearchState => ({
      ...state,
      filter,
    }),
  ),
);
