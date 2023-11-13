import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Unitcomponent } from 'src/app/Models/unitcomponent';
import { AuthService } from 'src/app/account/auth.service';
import { ApplicationsService } from 'src/app/services/Admin/applications.service';
import { CreateApplicationService } from 'src/app/services/Application/create-application.service';
import { UnitdetailsService } from 'src/app/services/unitscomponent/unitdetails.service';

@Component({
  selector: 'app-unit-details',
  templateUrl: './unit-details.component.html',
  styleUrls: ['./unit-details.component.css'],
})
export class UnitDetailsComponent implements OnInit {
  form: FormGroup;
  unitcomponentdata: Unitcomponent[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private unitcomponentservices: UnitdetailsService,
    private route: ActivatedRoute,
    private authService:AuthService,
    private applicationServices:CreateApplicationService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.formBuilder.group({
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
  ngOnInit(): void {
    this.getunitcomponentbyunit();
  }
  getunitcomponentbyunit() {
    this.unitcomponentservices
      .getunitcompounentbyunit(1)
      .subscribe((data: any) => {
        this.unitcomponentdata = data.data;
        console.log(this.unitcomponentdata);
        console.log(data.unitid);
      });
  }
  onSubmit() {
    if (this.form.valid) {
      console.log('valid');

      const ApplicationData = new FormData();
      for (const key in this.form.value) {
        ApplicationData.append(key, this.form.value[key]);
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
