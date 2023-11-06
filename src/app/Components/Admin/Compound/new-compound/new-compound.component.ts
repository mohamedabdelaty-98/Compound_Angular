import { Component } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { NewCompoundService } from 'src/app/services/CompoundServices/new-compound.service';


import {  OnInit } from '@angular/core';
import { CompoundService } from 'src/app/Services/CompoundServices/compound.service';
import { ActivatedRoute } from '@angular/router';
import { LandMarksCompound } from 'src/app/Models/land-marks-compound';
import { Compound } from 'src/app/Models/compound';
import { ServicelandmarkcompoundService } from 'src/app/Services/LandMarksCompoundServices/servicelandmarkcompound.service';
import * as L from 'leaflet';



@Component({
  selector: 'app-new-compound',
  templateUrl: './new-compound.component.html',
  styleUrls: ['./new-compound.component.css']
})
export class NewCompoundComponent {

  landmarkcompound: LandMarksCompound[] = [];
  private map!: L.Map;
  private marker!: L.Marker;
  ngOnInit(): void
   {
    
    this.map = L.map('map').setView([0, 0], 2); // Initial center and zoom level

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
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
    const compoundId = this.route.snapshot.paramMap.get('id');
    this.landmarkservice
      .getlandmaksByCompoundId(compoundId)
      .subscribe((data: any) => {
        this.landmarkcompound = data.data;
        console.log(this.landmarkcompound);
      });
    
    }

  compoundForm:FormGroup;
  File:File | null = null;

  constructor(private compoundService: NewCompoundService, private formBuilder: FormBuilder, private landmarkservice: ServicelandmarkcompoundService,
    private route: ActivatedRoute){
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
    });
  }

  onFileChange (event:any){
    this.File = event.target.files[0];
  }

  onSubmit(){
    console.log("hello");
    if (this.compoundForm.valid){
      console.log("valid");

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
          
        },
        (error) => {
          console.error('Error creating compound:', error);
        }
      );
    }
    else{
      console.log("notValid");
    }
    }

  }

