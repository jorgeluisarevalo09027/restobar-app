import * as AuthActions from '../actions/auth.actions';

import { createReducer, on } from '@ngrx/store';

import { AuthState } from '../../../shared/interfaces/auth.interface';

export const initialState: AuthState = {
  user: null,
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
  
  on(AuthActions.loginSuccess, (state, { user, token }) => ({
    ...state,
    user,
    token,
    loading: false,
    error: null
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
  
  on(AuthActions.registerSuccess, (state, { user }) => ({
    ...state,
    user,
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