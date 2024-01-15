import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

  forgetPassword: FormGroup;

  //Variables
  email: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.forgetPassword = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  // Service for forgot password
  submit() {
    this.email = String(this.forgetPassword.get('email')?.value) ?? '';

    //Setting States Empty
    this.forgetPassword.get('email')?.setValue('');

    //Clear Variables
    this.clearVariables();
  }

  clearVariables() {
    this.email = '';
  }

}
