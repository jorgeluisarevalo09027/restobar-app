import * as authReducer from "./auth/reducers/auth.reducer";

export const reducersmap ={
    [authReducer.authStoreStateKey]: authReducer.authReducer 
}

export const featurereducers ={
    ...reducersmap
}