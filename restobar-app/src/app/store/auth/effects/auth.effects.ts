import * as authActions from "../actions/auth.actions";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, switchMap } from "rxjs";

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


export const userEffects = { loadUser$ , createUser$ }