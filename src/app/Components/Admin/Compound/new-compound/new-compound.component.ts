import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewCompoundService } from 'src/app/Services/CompoundServices/new-compound.service';
import * as L from 'leaflet';
import { ActivatedRoute } from '@angular/router';
import { Compound } from 'src/app/Models/compound';
import { ServiceCompoundService } from 'src/app/services/service-compound.service';
import { map } from 'rxjs';
@Component({
  selector: 'app-new-compound',
  templateUrl: './new-compound.component.html',
  styleUrls: ['./new-compound.component.css'],
})
export class NewCompoundComponent implements OnInit {
  compound: Compound={
    name: "", id: 0, description: "", address: "",
    latitude: 0, longitude: 0, dateAdded: new Date(23 - 11 - 2022), file: "",
    street_area: 0, greenArea: 0, buildingArea: 0, location: "",
    compoundimages: []
  } ;
  // private servicecompoundservice!:ServiceCompoundService;

  compoundForm: FormGroup;
  File: File | null = null;
  private map!: L.Map;
  private marker!: L.Marker;
    latitude!:number;
   longitude! :number;
  constructor(
    private compoundService: NewCompoundService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    // private createcompound:createCompound,
    // private servicecompund: CompoundService,
    private servicecompoundservice:ServiceCompoundService,

    private newCompoundService:NewCompoundService
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
    this.map = L.map('map').setView([22, 48], 5); // Initial center and zoom level

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
       this.latitude = e.latlng.lat;
       this.longitude = e.latlng.lng;
       this.compound.latitude=this.latitude;
       this.compound.longitude=this.longitude;
      console.log(`Latitude: ${this.latitude}, Longitude: ${this.longitude}`);
    });
  }

  onFileChange(event: any) {
    this.File = event.target.files[0];
  }

  onSubmit() {
    this.map.on('click', (e) => {
      if (this.marker) {
        this.marker.setLatLng(e.latlng);
      } else {
        this.marker = L.marker(e.latlng).addTo(this.map);
      }

      // Access latitude and longitude from e.latlng.lat and e.latlng.lng
       this.latitude = e.latlng.lat;
       this.longitude = e.latlng.lng;
       this.compound.latitude=this.latitude;
       this.compound.longitude=this.longitude;
      console.log(`Latitude: ${this.latitude}, Longitude: ${this.longitude}`);
    });
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

      this.compoundService.createCompound(compoundData).subscribe(
       
        (response) => {
          console.log('Compound created:', response);
          // response.pipe(
          //   map((response: any) => {
             response=this.compound;
              return response; // You can transform the response as needed
            // }));
        },
        (error) => {
          console.error('Error creating compound:', error);
        }
      );
    } else {
      console.log('notValid');
    }
    // //////////////////////////////////////////////////////////
   
    // //////////////////////////////////////////////////////////
    console.log(this.compound.latitude,this.compound.longitude);
    this.compound.latitude=this.latitude;
    this.compound.longitude=this.longitude;
    // this.newCompoundService.createCompound(this.compound,this.longitude,this.latitude)
    // .subscribe((data:any)=>
    // {
    //   // this.compound=data;
    //   data=this.compound;
    //   console.log(this.compound.latitude);
    // });


    



  }
  }
