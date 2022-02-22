import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CustomCardsState } from '../reducers/custom-card.reducer';

export const selectFeatureCustomCardSelector =
  createFeatureSelector<CustomCardsState>('customCard');

export const selectGetAllCustomCardsSelector = createSelector(
  selectFeatureCustomCardSelector,
  ({ cards }) => cards,
);
