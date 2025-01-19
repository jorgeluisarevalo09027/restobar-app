import * as AuthActions from '../actions/auth.actions';

import { createReducer, on } from '@ngrx/store';

import { UserResponseModel } from '../../../models/user-response.model';

export const authStoreStateKey = 'auth';

export interface AuthState {
  user: UserResponseModel |  null,
  token: string | null,
  loading: boolean,
  error: string | null
}


export const initialState: AuthState = {
  user:  null,
  token: null,
  loading: false,
  error: null
};

export const authReducer = createReducer(
  initialState,
  
  // Login
  on(AuthActions.login, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  
  on(AuthActions.loginSuccess, (state, { response }) => ({
    ...state,
    user:response.data,
    token:response.token,
    loading: false,
    error: null,
  })),
  
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  // Register
  on(AuthActions.register, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  
  on(AuthActions.registerSuccess, (state, { response }) => ({
    ...state,
    user:response.data,
    token:response.token,
    loading: false,
    error: null
  })),
  
  on(AuthActions.registerFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  // Logout
  on(AuthActions.logout, () => initialState)
);