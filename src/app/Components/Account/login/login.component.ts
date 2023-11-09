import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { FormControl } from '@angular/forms';
import { getCookie, setCookie } from 'typescript-cookie';
import { LoginService } from 'src/app/account/login.service';
import { UserLogin } from 'src/app/interfaces/user-login';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/account/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  EmailRequired = false;
  PasswordRequired = false;
  confirmPasswordRequired = false;
  user!: UserLogin;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      // confirmPassword: ['', [Validators.required]]
    });
  }
  errorMessage: string = '';
  submitForm() {
    const formValue = this.loginForm.value;
    if (this.loginForm.valid) {
      this.loginService
        .login({
          email: formValue.email,
          password: formValue.password,
        })
        .subscribe({
          next: (loginResponse) => {
            let tokenDecoded: any = jwtDecode(loginResponse.data.token);
            let tokenExpiration: any = new Date(loginResponse.data.expiration);
            let jsonTokenWithoutDecode = JSON.stringify(
              loginResponse.data.token
            );
            setCookie('User', jsonTokenWithoutDecode, {
              expires: tokenExpiration,
              path: '',
            });
            let role: string[] = this.authService.getUserRoles();
            if (role.includes('Admin')) this.router.navigate(['x/dashboard']);
            else {
              this.check();
              this.router.navigate(['']);
            }
          },
          error: (err) => {
            this.errorMessage =
              'Authentication failed. Please check your credentials.';
          },
        });
    } else {
      // Mark the email control as touched if it's empty
      if (this.loginForm.get('email')?.value == '') {
        this.EmailRequired = true;
      }

      if (this.loginForm.get('password')?.value == '') {
        this.PasswordRequired = true;
      }
      // console.log(this.loginForm.get('confirmPassword')?.value)
      // if (this.loginForm.get('confirmPassword')?.value == '') {
      //   this.confirmPasswordRequired=true;
      // }
    }
  }
  check() {
    console.log(this.authService.getTokenDecoded());
  }
  gotoroutesignup() {
    this.router.navigate(['register']);
  }
}
