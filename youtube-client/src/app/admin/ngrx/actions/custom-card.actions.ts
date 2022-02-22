import { createAction, props } from '@ngrx/store';
import { CustomCard } from '../../models/card.model';

export const createCard = createAction(`[Admin page] create card`, props<{ card: CustomCard }>());
