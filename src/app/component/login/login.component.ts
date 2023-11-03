import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  RegisterationValidation = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    // age: new FormControl(24, [
    //   Validators.required,
    //   Validators.min(20),
    //   Validators.max(40),
    // ]),
    email: new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)]),
  });




  Add() {
    if (this.RegisterationValidation.valid) {
      console.log('Your object is valid');
    }
  }

  // get email():FormControl {
  //   return this.RegisterationValidation.get("email") as FormControl;
  // }
  // get AgeValid() {
  //   return this.RegisterationValidation.controls['age'].valid;
  // }
  get EmailValid() {
    return this.RegisterationValidation.controls['email'].valid;
  }
  get PasswordValid() {
    return this.RegisterationValidation.controls['password'].valid;
  }

}
