import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Unitcomponent } from 'src/app/Models/unitcomponent';
import { UnitdetailsService } from 'src/app/Services/unitscomponent/unitdetails.service';

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
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      PhoneNumber: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\+966\s(1[1-9]|5[0-9]|8[0-9])\s\d{7}$/),
        ],
      ], //regex for numbers in saudi arabia
      email: ['', [Validators.required, Validators.email]],
      budget: ['', [Validators.required, Validators.min(100000)]],
    });
  }
  ngOnInit(): void {
    this.getunitcomponentbyunit();
  }
  getunitcomponentbyunit() {
    this.unitcomponentservices
      .getunitcompounentbyunit(1039)
      .subscribe((data: any) => {
        this.unitcomponentdata = data.data;
        console.log(this.unitcomponentdata);
        console.log(data.unitid);
      });
  }
  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
      console.log(formData);
    }
  }
}
