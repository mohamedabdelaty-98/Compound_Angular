import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  loginForm: FormGroup;
  NameRequired=false;
  EmailRequired = false;
  PasswordRequired=false
  confirmPasswordRequired=false;

  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if ( password === confirmPassword && password && confirmPassword) {
      return null;
    } else if(password.length!=0 && confirmPassword.length!=0){
      
      return { passwordMismatch: true }; 
    }
    else{
      return null;
    }
  }

  constructor(private fb: FormBuilder) {
  this.loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    confirmPassword: ['', [Validators.required]],
  }, {
    validators: this.passwordMatchValidator, // Use the custom validator function
  });
}

   
  
  submitForm() {
    
    if (this.loginForm.valid) {
      // Handle form submission here
      console.log(this.loginForm.value);  
    
    }else 
    {

      if (this.loginForm.get('username')?.value == '') {
        this.NameRequired=true;
      }

      if (this.loginForm.get('email')?.value == '') {
        this.EmailRequired=true;
      }

      if (this.loginForm.get('password')?.value == '') {
        this.PasswordRequired=true;
      }

      if (this.loginForm.get('confirmPassword')?.value == '') {
        this.confirmPasswordRequired=true;
      }
      
    }
  }

  
}
