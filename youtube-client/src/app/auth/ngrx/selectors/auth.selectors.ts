import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from 'src/app/admin/models/user.model';
import { AuthState } from '../reducers/auth.reducer';

export const selectAuthFeature = createFeatureSelector<AuthState>('auth');

export const selectIsLoggedIn = createSelector(selectAuthFeature, (auth) => !!auth.user);

export const selectIsLoggedOut = createSelector(selectIsLoggedIn, (loggedIn) => !loggedIn);

export const selectIsAdminRole = createSelector(selectAuthFeature, ({ user }) =>
  !user ? false : new User(user).isAdminRole(),
);
