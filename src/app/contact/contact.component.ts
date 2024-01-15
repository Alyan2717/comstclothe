import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup

  contact: any = {
    name: '',
    email: '',
    message: ''
  }

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  //Service for Contact Page
  submit() {
    this.contact.name = String(this.contactForm.get('name')?.value) ?? '';
    this.contact.email = String(this.contactForm.get('email')?.value) ?? '';
    this.contact.message = String(this.contactForm.get('message')?.value) ?? '';

    //Setting States Empty
    this.contactForm.get('name')?.setValue('');
    this.contactForm.get('email')?.setValue('');
    this.contactForm.get('message')?.setValue('');

    // Clear Variables
    this.clearVariables();
  }

  clearVariables() {
    this.contact.name = '';
    this.contact.email = '';
    this.contact.message = '';
  }

}
