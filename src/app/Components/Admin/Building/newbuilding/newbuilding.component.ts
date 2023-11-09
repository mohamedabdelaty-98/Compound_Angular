import { Component, OnInit } from '@angular/core';
import { AddNewBuildingService } from 'src/app/services/Building/add-new-building.service';
import { CompoundService } from 'src/app/Services/CompoundServices/compound.service';
import { Compound } from 'src/app/Models/compound';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Building } from 'src/app/Models/building';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-newbuilding',
  templateUrl: './newbuilding.component.html',
  styleUrls: ['./newbuilding.component.scss']
})
export class NewbuildingComponent implements OnInit{

// buildingdata: Building ={
//   id: 0,
//   bulidingNumber: 0,
//   description: '',
//   numberOfFloor: 0,
//   status:'',
//   dateAdded: new Date(),
//   sizeArea : 0,
//   compoundId: 0,
//   buildingimages: [],
// }
// ;
compounddata:Compound[]=[];
BuildingForm: FormGroup;

constructor(private servicecompund:CompoundService,private formBuilder: FormBuilder,private addnewbuilding : AddNewBuildingService) {
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

AddnewBuilding(){
if(this.BuildingForm.valid){
  const buildingdata= new FormData();
  for (const key in this.BuildingForm.value) {
      buildingdata.set(key, this.BuildingForm.value[key]);
      console.log(key, this.BuildingForm.value[key]);
  }
  console.log(buildingdata);
this.addnewbuilding.AddNewBuilding(buildingdata).subscribe(
  (response) => {
    console.log('building created:', response);
  },
  (error) => {
    console.error('Error creating building:', error);
  }
);

}
else{
  console.log("invalid data");
  }
}
}
