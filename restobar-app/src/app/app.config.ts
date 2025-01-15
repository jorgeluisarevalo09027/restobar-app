import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AuthInterceptorService } from './services/auth-interceptor.service';
import { isDevMode } from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideStore(), 
    provideEffects([]),
    provideHttpClient(withInterceptorsFromDi()),
   { provide: HTTP_INTERCEPTORS, 
    useClass: AuthInterceptorService, 
    multi: true },
   provideStoreDevtools({
     maxAge: 25,
     logOnly: !isDevMode()
   })
  ]
};

