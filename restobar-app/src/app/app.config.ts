import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { AuthInterceptorService } from './services/auth-interceptor.service';
import { featurereducers } from './store/reducers-map';
import { globalEffects } from './store/global-effects';
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
    provideStore(featurereducers), 
    provideEffects(globalEffects),
    provideAnimations(),
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

