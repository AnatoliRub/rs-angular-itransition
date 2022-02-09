import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { customCardReducer } from '../admin/ngrx/reducers/custom-card.reducer';
import { authReducer } from '../auth/ngrx/reducers/auth.reducer';

export interface State {}

export const reducers: ActionReducerMap<State> = {
  customCard: customCardReducer,
  auth: authReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
