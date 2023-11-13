import { Component, OnInit } from '@angular/core';
import { CompoundService } from 'src/app/Services/CompoundServices/compound.service';
import { Compound } from 'src/app/Models/compound';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddNewBuildingService } from 'src/app/Services/Building/add-new-building.service';

@Component({
  selector: 'app-newbuilding',
  templateUrl: './newbuilding.component.html',
  styleUrls: ['./newbuilding.component.scss'],
})
export class NewbuildingComponent implements OnInit {
  compounddata: Compound[] = [];
  BuildingForm: FormGroup;

  constructor(
    private servicecompund: CompoundService,
    private formBuilder: FormBuilder,
    private addnewbuilding: AddNewBuildingService
  ) {
    this.BuildingForm = this.formBuilder.group({
      bulidingNumber: ['', Validators.required],
      Description: ['', Validators.required],
      numberOfFloor: ['', Validators.required],
      sizeArea: [, Validators.required],
      status: ['', Validators.required],
      compoundId: ['', Validators.required],
      dateAdded: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.servicecompund.getallcompounds().subscribe((data: any) => {
      this.compounddata = data.data;
      console.log(this.compounddata);
    });
  }

  AddnewBuilding() {
    if (this.BuildingForm.valid) {
      const buildingdata = new FormData();
      for (const key in this.BuildingForm.value) {
        buildingdata.set(key, this.BuildingForm.value[key]);
      }

      this.addnewbuilding.AddNewBuilding(buildingdata).subscribe(
        (response) => {
          console.log('Building created:', response);
        },
        (error) => {
          console.error('Error creating building:', error);
        }
      );
    } else {
      console.log('Invalid data');
    }
  }
}
