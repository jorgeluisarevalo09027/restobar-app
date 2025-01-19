import * as authActions from "../actions/auth.actions";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, switchMap, tap } from "rxjs";

import { UsersService } from "../../../services/users.service";
import { inject } from "@angular/core";

export const loadUser$ = createEffect(
    () => {
        const action$ = inject(Actions);
        const service = inject(UsersService)
        return action$.pipe(
            ofType(authActions.login),
            switchMap((action)=> 
                service.login(action.request).pipe(
                    map( response => authActions.loginSuccess({response})),
                    catchError(error => of(authActions.loginFailure({error})))
                )
            )
        )

    },
    {functional:true}
    
);

export const createUser$ = createEffect(
    () => {
        const action$ = inject(Actions);
        const service = inject(UsersService)
        return action$.pipe(
            ofType(authActions.register),
            switchMap((action)=> 
                service.register(action.request).pipe(
                    map( response => authActions.registerSuccess({response})),
                    catchError(error => of(authActions.registerFailure({error})))
                )
            )
        )

    },
    {functional:true}
    
);

export const persistToken$ = createEffect(
    () => {
        const action$ = inject(Actions);
        return action$.pipe(
            ofType(authActions.loginSuccess, authActions.registerSuccess),
            tap(({ response })=> {
                sessionStorage.setItem('authToken', response.token)
            })
        )

    },
    {functional:true, dispatch:false},
);

export const clearToken$ = createEffect(
    () => {
        const action$ = inject(Actions);
        return action$.pipe(
            ofType(authActions.logout),
            tap(()=> localStorage.removeItem('authToken'))
        )

    },
    {functional:true},
);

export const checkAuth$ = createEffect(
    () => {
        const action$ = inject(Actions);
        const userService = inject(UsersService);
        
        return action$.pipe(
            ofType('@ngrx/effects/init'),
            tap(({ response })=> {
                const token = localStorage.getItem('authToken');
                if(token) {
                    if (isTokenExpired(token)) {
                        console.log(token);
                    } else {
                        console.log('no expirado')
                    }
                    
                }
            })
        );
    },
    { functional: true , dispatch:false }
);

function isTokenExpired(token: string): boolean {
    try {
        const decoded = JSON.parse(atob(token.split('.')[1]));
        return decoded.exp * 1000 < Date.now();
    } catch {
        return true;
    }
}


export const userEffects = { loadUser$ , createUser$ , clearToken$,persistToken$, checkAuth$ }