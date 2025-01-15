import { AppAuthComponent } from './components/app-auth/app-auth.component';
import { Routes } from '@angular/router';
import { UserImagesComponent } from './components/user-images/user-images.component';

export const routes: Routes = [
    { path: '', component: AppAuthComponent }, 
    { path: 'user-images', component: UserImagesComponent }, 
    { path: '**', redirectTo: '' }
];
