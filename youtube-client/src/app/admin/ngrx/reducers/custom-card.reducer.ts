import { createReducer, on } from '@ngrx/store';
import { CustomCard } from '../../models/card.model';
import { createCard } from '../actions/custom-card.actions';

export interface CustomCardsState {
  cards: CustomCard[];
}

export const initialCustomCardState: CustomCardsState = {
  cards: [],
};

export const customCardReducer = createReducer<CustomCardsState>(
  initialCustomCardState,
  on(
    createCard,
    (state, { card }): CustomCardsState => ({
      ...state,
      cards: [...state.cards, card],
    }),
  ),
);
