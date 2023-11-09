import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/account/register.service';
import { UserRegister } from 'src/app/interfaces/user-register';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  loginForm: FormGroup;
  NameRequired = false;
  EmailRequired = false;
  PasswordRequired = false;
  confirmPasswordRequired = false;
  birthdateRequired = false;
  userRegister!: UserRegister;
  firstNameRequired = false;
  lastNameRequired = false;

  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password === confirmPassword && password && confirmPassword) {
      return null;
    } else if (password.length != 0 && confirmPassword.length != 0) {
      return { passwordMismatch: true };
    } else {
      return null;
    }
  }

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private router: Router
  ) {
    this.loginForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(4)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(4)]],
        firstName: ['', [Validators.required, Validators.minLength(4)]],
        lastName: ['', [Validators.required, Validators.minLength(4)]],
        birthdate: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validators: this.passwordMatchValidator, // Use the custom validator function
      }
    );
  }
  registrationError: string = '';

  submitForm() {
    const formValue = this.loginForm.value;
    console.log({
      confirmPasword: formValue.confirmPassword,
      email: formValue.email,
      fName: formValue.firstName,
      lName: formValue.firstName,
      password: formValue.password,
      userName: formValue.username,
      dateOfBirth: formValue.birthdate,
    });

    if (this.loginForm.valid) {
      this.registerService
        .register({
          confirmPasword: formValue.confirmPassword,
          email: formValue.email,
          fName: formValue.firstName,
          lName: formValue.firstName,
          password: formValue.password,
          userName: formValue.username,
          dateOfBirth: formValue.birthdate,
        })
        .subscribe({
          next: (data) => {
            console.log(data);
            this.router.navigate(['login']);
          },
          error: (error) => {
            // Handle registration errors
            this.registrationError = 'An error occurred during registration.';
          },
        });
    } else {
      if (this.loginForm.get('username')?.value == '') {
        this.NameRequired = true;
      }

      if (this.loginForm.get('email')?.value == '') {
        this.EmailRequired = true;
      }
      if (this.loginForm.get('birthdate')?.value == '') {
        this.birthdateRequired = true;
      }

      if (this.loginForm.get('firstName')?.value == '') {
        this.firstNameRequired = true;
      }
      if (this.loginForm.get('lastName')?.value == '') {
        this.lastNameRequired = true;
      }

      if (this.loginForm.get('password')?.value == '') {
        this.PasswordRequired = true;
      }

      if (this.loginForm.get('confirmPassword')?.value == '') {
        this.confirmPasswordRequired = true;
      }
    }
  }
  gotorouterlogin() {
    this.router.navigate(['login']);
  }
}
