import { Component } from '@angular/core';
import { FormControl, FormBuilder,FormGroup, Validators } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent {

  RegisterationValidation = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      this.customTypeValidator('string'),
    ]),
    // lname: new FormControl('', [
    //   Validators.required,
    //   Validators.minLength(3),
    // ]),
    // fname: new FormControl('', [
    //   Validators.required,
    //   Validators.minLength(3),
    // ]),
    SSN: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.required,Validators.pattern(/^\d{10}$/),

    ]),
    
    
    Budget: new FormControl( null,[
      Validators.required,
      Validators.min(10000),
      this.customTypeValidator('number'),
    ]),
    FON: new FormControl( null,[
      Validators.required,
      this.customTypeValidator('number'),
    ]),
    email: new FormControl('', 
    [Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)]),
    number: new FormControl('', 
    [Validators.required,Validators.pattern(/^(966|20)\d{3}\d{7}$/)]),
    // confirmPassword: new FormControl('', [
    //   Validators.required,
    //   this.passwordMatchValidator(),
    // ]),
       });


 
       customTypeValidator(expectedType: string) {
        return (control: AbstractControl) => {
          var value = control.value;
          console.clear();
          console.log(typeof value);
          console.log( control.value);
          //var de;
          if(value>0){
            console.log( control.value);
            value=parseInt(value);
          }
    
          if (typeof value !== expectedType) {
            return { invalidType: true };
          }
    
          return null;
        };
      }
  
  
  //  passwordMatchValidator(): ValidatorFn {
  //   return (control: AbstractControl): { [key: string]: any } | null => {
  //     const passwordControl = control.root.get('password');
  //     const password = passwordControl ? passwordControl.value : null;
  //     const confirmPassword = control.value;
  
  //     if (password !== null && confirmPassword !== null) {
  //       return password === confirmPassword ? null : { passwordMismatch: true };
  //     } else {
  //       return null;
  //     }
  //   };
  // }

  Add() {
    if (this.RegisterationValidation.valid) {
      console.log('Your object is valid');
    }
  }

  get NameValid() {
    return this.RegisterationValidation.controls['name'].valid;
  }
  // get PasswordValid() {
  //   return this.RegisterationValidation.controls['password'].valid;
  // }
  // get LNameValid() {
  //   return this.RegisterationValidation.controls['lname'].valid;
  // }
  get NumberValid() {
    return this.RegisterationValidation.controls['number'].valid;
  }
  // get FNameValid() {
  //   return this.RegisterationValidation.controls['fname'].valid;
  // }
  get SSNValid() {
    return this.RegisterationValidation.controls['SSN'].valid;
  }
  get BudgetValid() {
    return this.RegisterationValidation.controls['Budget'].valid;
  }
  get EmailValid() {
    return this.RegisterationValidation.controls['email'].valid;
  }
  get FONValid() {
    return this.RegisterationValidation.controls['FON'].valid;
}
}