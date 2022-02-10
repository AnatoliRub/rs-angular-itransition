import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { customCardReducer } from '../admin/ngrx/reducers/custom-card.reducer';
import { authReducer } from '../auth/ngrx/reducers/auth.reducer';
import { searchReducer } from '../core/ngrx/reducer/search.reducer';
import { postReducer } from '../youtube/ngrx/reducers/post.reducer';

export interface State {}

export const reducers: ActionReducerMap<State> = {
  customCard: customCardReducer,
  auth: authReducer,
  search: searchReducer,
  posts: postReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
