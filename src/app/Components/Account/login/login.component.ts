import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  EmailRequired = false;
  PasswordRequired=false;
  confirmPasswordRequired=false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)],],
      confirmPassword: ['', [Validators.required]]
    });}

    submitForm() {
      if (this.loginForm.valid) {
        console.log(this.loginForm.value);
      } 
      else 
      {
        // Mark the email control as touched if it's empty
        if (this.loginForm.get('email')?.value == '') {
          this.EmailRequired=true;
        }

        if (this.loginForm.get('password')?.value == '') {
          this.PasswordRequired=true;
        }
        // console.log(this.loginForm.get('confirmPassword')?.value)
        // if (this.loginForm.get('confirmPassword')?.value == '') {
        //   this.confirmPasswordRequired=true;
        // }
        
      }
    }
}
