import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginFrom: FormGroup;
  registerForm: FormGroup;

  // Variables
  user: any = {
    username: '',
    password: '',
    email: ''
  }

  constructor(private formBuilder: FormBuilder) {
    // Login
    this.loginFrom = this.formBuilder.group({
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
    this.user.username = String(this.loginFrom.get('username')?.value) ?? '';
    this.user.password = String(this.loginFrom.get('password')?.value) ?? '';
    this.user.email = String(this.registerForm.get('email')?.value) ?? '';

    // Serive for login and Register on bool condition
    if (check) {
      //Login
      console.log("🚀 ~ LoginComponent ~ submit ~ login")
      // Setting States Empty
      this.loginFrom.get('username')?.setValue('');
      this.loginFrom.get('password')?.setValue('');
      this.registerForm.get('email')?.setValue('');
    }
    else {
      //Register
      console.log("🚀 ~ LoginComponent ~ submit ~ register")
      // Setting States Empty
      this.registerForm.get('email')?.setValue('');
    }
  }
}
