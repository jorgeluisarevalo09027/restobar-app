import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
      console.log('Registro:', this.registerForm.value);
      this.router.navigate(['/user-images']);
    }
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log('Login:', this.loginForm.value);
      this.router.navigate(['/user-images']);
    }
  }
}
