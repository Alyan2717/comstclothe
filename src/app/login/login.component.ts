import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  registerForm: FormGroup;

  // Variables
  user: any = {
    username: '',
    password: '',
    email: ''
  }

  constructor(private formBuilder: FormBuilder) {
    // Login
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    // Register
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  submit(check: boolean) {
    this.user.username = String(this.loginForm.get('username')?.value) ?? '';
    this.user.password = String(this.loginForm.get('password')?.value) ?? '';
    this.user.email = String(this.registerForm.get('email')?.value) ?? '';

    // Sericve for login and Register on bool condition
    if (check) {
      //Login
      console.log("🚀 ~ LoginComponent ~ submit ~ login")
      // Setting States Empty
      this.loginForm.get('username')?.setValue('');
      this.loginForm.get('password')?.setValue('');
      this.registerForm.get('email')?.setValue('');

      //Clear Variables
      this.clearVariables();
    }
    else {
      //Register
      console.log("🚀 ~ LoginComponent ~ submit ~ register")
      // Setting States Empty
      this.registerForm.get('email')?.setValue('');

      //Clear Variables
      this.clearVariables();
    }
  }

  clearVariables() {
    this.user.username = '';
    this.user.password = '';
    this.user.email = '';
  }
}
