import { createAction, props } from '@ngrx/store';
import { IFilterData } from 'src/types/filtering-criteria-types';

export const toggleSearchAction = createAction('[Header] toggle settings');

export const setSearchWord = createAction(
  '[Search] set search word',
  props<{ searchWord: string }>(),
);

export const setSearchFilter = createAction(
  '[SearchSettings] set filter',
  props<{ filter: IFilterData }>(),
);
