import { createAction, props } from '@ngrx/store';

import { CreateUserRequestModel } from '../../../models/create-user-request.models';
import { LoginUserRequestModel } from '../../../models/login-user-request.model';
import { LoginUserResponseModel } from '../../../models/login-user-response.model';
import { UserResponseModel } from '../../../models/user-response.model';

// Login Actions
export const login = createAction(
  '[Auth] Login',
  props<{ request: LoginUserRequestModel }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ response: LoginUserResponseModel}>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);

// Register Actions
export const register = createAction(
  '[Auth] Register',
  props<{ request: CreateUserRequestModel }>()
);

export const registerSuccess = createAction(
  '[Auth] Register Success',
  props<{ response: LoginUserResponseModel }>()
);

export const registerFailure = createAction(
  '[Auth] Register Failure',
  props<{ error: string }>()
);

// Logout Action
export const logout = createAction('[Auth] Logout');