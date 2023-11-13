import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as L from 'leaflet';
import { Compound } from 'src/app/Models/compound';
import { CompoundService } from 'src/app/Services/CompoundServices/compound.service';
import { NewCompoundService } from 'src/app/Services/CompoundServices/new-compound.service';
import { EditcompoundService } from 'src/app/services/CompoundServices/editcompound.service';
import { ServiceCompoundService } from 'src/app/services/service-compound.service';

@Component({
  selector: 'app-edit-compound',
  templateUrl: './edit-compound.component.html',
  styleUrls: ['./edit-compound.component.scss']
})
export class EditCompoundComponent implements OnInit {
  compounddata: Compound[] = [];
  compound: Compound={
    name: "", id: 3, description: "", address: "",
    latitude: 0, longitude: 0, dateAdded: new Date(23 - 11 - 2022), file: "",
    street_area: 0, greenArea: 0, buildingArea: 0, location: "",
    compoundimages: []
  } ;
  compoundForm: FormGroup;
  File: File | null = null;
  private map!: L.Map;
  private marker!: L.Marker;
  private servicecompoundservice!:ServiceCompoundService;

  constructor(
    private compoundService: NewCompoundService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private servicecompund: CompoundService,
    private editcompoundservice:EditcompoundService
  ) {
    this.compoundForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Description: ['', Validators.required],
      Address: ['', Validators.required],
      Latitude: [0, Validators.required],
      Longitude: [0, Validators.required],
      File: [null, Validators.required],
      Street_area: [0, Validators.required],
      GreenArea: [0, Validators.required],
      BuildingArea: [0, Validators.required],
      DateAdded: [0, Validators.required],
      Location: [0, Validators.required],
    });
  }
  ngOnInit(): void {
    this.map = L.map('map').setView([0, 0], 2); // Initial center and zoom level

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    this.map.on('click', (e) => {
      if (this.marker) {
        this.marker.setLatLng(e.latlng);
      } else {
        this.marker = L.marker(e.latlng).addTo(this.map);
      }

      // Access latitude and longitude from e.latlng.lat and e.latlng.lng
      const latitude = e.latlng.lat;
      const longitude = e.latlng.lng;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    });

    //get all compound  because you dont make get by id
    this.servicecompoundservice.getServiceByCompoundId(this.compound.id)
    .subscribe((data:any)=>
    {
      this.compound=data.data;
      console.log(this.compound.latitude);
    });
  
  }

  onFileChange(event: any) {
    this.File = event.target.files[0];
  }

edit(){
console.log(this.compound.id);
}

  onSubmit() {
    console.log('hello');
    if (this.compoundForm.valid) {
      console.log('valid');

      const compoundData = new FormData();
      for (const key in this.compoundForm.value) {
        if (key !== 'File') {
          compoundData.append(key, this.compoundForm.value[key]);
        }
      }
      if (this.File) {
        compoundData.append('File', this.File);
      }
      console.log(compoundData);

      // this.compoundService.createCompound(compoundData).subscribe(
      //   (response) => {
      //     console.log('Compound created:', response);
      //   },
      //   (error) => {
      //     console.error('Error creating compound:', error);
      //   }
      // );
    } else {
      console.log('notValid');
    }

    this.editcompoundservice.editCompound(this.compound)
    .subscribe((data:any)=>
    {
      data=this.compound;
      // console.log(this.compound.name);
    }
    );
   
  }
  locationValue: number = 0;

compoun(newValue: number) {
  this.locationValue = newValue;
  
  this.servicecompoundservice.getServiceByCompoundId(newValue)
    .subscribe((data:any) => {
      this.compound = data;

      console.log(this.compound.latitude);
    });
}


}
