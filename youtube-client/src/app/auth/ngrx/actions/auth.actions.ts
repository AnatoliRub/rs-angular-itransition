import { createAction, props } from '@ngrx/store';
import { UserData } from 'src/app/admin/types/user-data.type';

export const login = createAction('[Login form] login', props<{ user: UserData }>());

export const logout = createAction('[Logout form] logout');
