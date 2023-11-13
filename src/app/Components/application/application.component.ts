import { Component } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { AuthService } from 'src/app/account/auth.service';
import { CreateApplicationService } from 'src/app/services/Application/create-application.service';
// import { ApplicationsService } from 'src/app/services/Admin/applications.service';
// import { CreateApplicationService } from 'src/app/services/Application/create-application.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css'],
})
export class ApplicationComponent {
  ApplicationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private applicationServices: CreateApplicationService,
    private authService: AuthService
  ) {
    this.ApplicationForm = this.formBuilder.group({
      ssn: ['', [Validators.required, Validators.maxLength(10)]],
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(12),
        ],
      ],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^1234567$/)]],
      contactEmail: ['', [Validators.required, Validators.email]],
      budget: [0, [Validators.required, Validators.min(100000)]],
      floorNumber: [
        0,
        [Validators.required, Validators.min(1), Validators.max(5)],
      ],
    });
  }

  Add() {
    if (this.ApplicationForm.valid) {
      console.log('valid');

      const ApplicationData = new FormData();
      for (const key in this.ApplicationForm.value) {
        ApplicationData.append(key, this.ApplicationForm.value[key]);
      }
      const userId = this.authService.getUserId();
      ApplicationData.append('UserId', userId);

      console.log(ApplicationData);

      console.log(ApplicationData);
      this.applicationServices.submitApplication(ApplicationData).subscribe(
        (respone) => {
          console.log('Application has been submitted', respone);
        },
        (error) => {
          console.log("Application hasn't been submitted", error);

          if (error && error.error && error.error.errors) {
            const validationErrors = error.error.errors;
            console.log(validationErrors);
          }
        }
      );
    } else {
      console.log('invalid');
    }
  }
}
