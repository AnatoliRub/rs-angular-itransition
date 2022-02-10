import { createReducer, on } from '@ngrx/store';
import { UserData } from 'src/app/admin/types/user-data.type';
import { AuthActions } from '../actions/auth-action.types';

export interface AuthState {
  user: UserData | null;
}

const userData = localStorage.getItem('user');

export const initialAuthState: AuthState = {
  user: userData !== null ? JSON.parse(userData) : null,
};

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state, { user }): AuthState => {
    return { ...state, user };
  }),

  on(AuthActions.logout, (state): AuthState => {
    return { ...state, user: null };
  }),
);
