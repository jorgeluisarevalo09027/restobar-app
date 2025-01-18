import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { CreateUserRequestModel } from '../../models/create-user-request.models';
import { LoginUserRequestModel } from '../../models/login-user-request.model';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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
export class AppAuthComponent implements OnInit {
  registerForm: FormGroup;
  loginForm: FormGroup;
  private httpservice = inject(UsersService);
  
  constructor(private fb: FormBuilder, private router: Router) {
    
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
    
    
    
  }

  onRegister() {
    if (this.registerForm.valid) {
      let request = new CreateUserRequestModel({
        email:this.registerForm.controls['email'].value,
        key: this.registerForm.controls['password'].value,
        name: this.registerForm.controls['name'].value,
        phone:this.registerForm.controls['phone'].value
      })
      this.httpservice.register(request).subscribe((response)=>{
        console.log(response);
      })
      //this.router.navigate(['/user-images']);
    }
  }

  onLogin() {
    if (this.loginForm.valid) {
      
      //this.router.navigate(['/user-images']);
      let request = new LoginUserRequestModel({
        email: this.loginForm.controls['email'].value,
        key: this.loginForm.controls['password'].value
      });

      this.httpservice.login(request).subscribe((response )=> {
        //localStorage.setItem('token', response.token);
      } )
      
    }
  }
}
