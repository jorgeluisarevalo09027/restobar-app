import * as authActions from '../../store/auth/actions/auth.actions';
import * as authSelectors from '../../store/auth/selectors/auth.selectors';

import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

import { AuthState } from '../../store/auth/reducers/auth.reducer';
import { CommonModule } from '@angular/common';
import { CreateUserRequestModel } from '../../models/create-user-request.models';
import { LoginUserRequestModel } from '../../models/login-user-request.model';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-app-auth',
  imports: [ 
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './app-auth.component.html',
  styleUrl: './app-auth.component.scss'
})
export class AppAuthComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  loginForm: FormGroup;
  public ngDestroyed$ = new Subject();

  
  constructor(private fb: FormBuilder, private router: Router , private authStore : Store<AuthState>) {
    
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', Validators.required],
      phone: ['', Validators.required]
    });

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  ngOnInit(): void {
    this.authStore
    .select(authSelectors.selectUser)
    .pipe(
      takeUntil(this.ngDestroyed$)
    )
    .subscribe((response)=>{
      if(response) {
        //this.router.navigate(['/user-images']);
        console.log(response)
      }
    })
    
  }

  ngOnDestroy(): void {
    this.ngDestroyed$.next(true);
    this.ngDestroyed$.unsubscribe();
  }  

  onRegister() {
    if (this.registerForm.valid) {
      let request = new CreateUserRequestModel({
        email:this.registerForm.controls['email'].value,
        key: this.registerForm.controls['password'].value,
        name: this.registerForm.controls['name'].value,
        phone:this.registerForm.controls['phone'].value
      })

      this.authStore.dispatch(authActions.register({ request }));

    }
  }

  onLogin() {
    if (this.loginForm.valid) {
      
      let request = new LoginUserRequestModel({
        email: this.loginForm.controls['email'].value,
        key: this.loginForm.controls['password'].value
      });
      this.authStore.dispatch(authActions.login({request}))
    }
  }
}
