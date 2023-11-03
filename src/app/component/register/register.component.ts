import { group } from '@angular/animations';
import { Component } from '@angular/core';
import { FormControl, FormBuilder,FormGroup, Validators } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {

  

  RegisterationValidation = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    lname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    fname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    
    age: new FormControl(24, [
      Validators.required,
      Validators.min(20),
      Validators.max(40),
    ]),
    email: new FormControl('', 
    [Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)]),
    number: new FormControl('', 
    [Validators.required,Validators.pattern(/^966\d{3}\d{7}$/)]),
    confirmPassword: new FormControl('', [
      Validators.required,
      this.passwordMatchValidator(),
    ]),
       });


 
  
  
  
   passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const passwordControl = control.root.get('password');
      const password = passwordControl ? passwordControl.value : null;
      const confirmPassword = control.value;
  
      if (password !== null && confirmPassword !== null) {
        return password === confirmPassword ? null : { passwordMismatch: true };
      } else {
        return null;
      }
    };
  }

  Add() {
    if (this.RegisterationValidation.valid) {
      console.log('Your object is valid');
    }
  }

  get NameValid() {
    return this.RegisterationValidation.controls['name'].valid;
  }
  get PasswordValid() {
    return this.RegisterationValidation.controls['password'].valid;
  }
  get LNameValid() {
    return this.RegisterationValidation.controls['lname'].valid;
  }
  get NumberValid() {
    return this.RegisterationValidation.controls['number'].valid;
  }
  get FNameValid() {
    return this.RegisterationValidation.controls['fname'].valid;
  }
  get UserNameValid() {
    return this.RegisterationValidation.controls['username'].valid;
  }
  get AgeValid() {
    return this.RegisterationValidation.controls['age'].valid;
  }
  get EmailValid() {
    return this.RegisterationValidation.controls['email'].valid;
  }




}
