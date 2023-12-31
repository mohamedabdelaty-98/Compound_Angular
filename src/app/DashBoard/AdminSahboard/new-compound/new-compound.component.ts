import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as L from 'leaflet';
import { ActivatedRoute } from '@angular/router';
import { NewCompoundService } from 'src/app/services/CompoundServices/new-compound.service';
@Component({
  selector: 'app-new-compound',
  templateUrl: './new-compound.component.html',
  styleUrls: ['./new-compound.component.css'],
})
export class NewCompoundComponent implements OnInit {
  compoundForm: FormGroup;
  File: File | null = null;
  private map!: L.Map;
  private marker!: L.Marker;

  constructor(
    private compoundService: NewCompoundService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
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
});
}

onFileChange(event: any) {
this.File = event.target.files[0];
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
  console.log(compoundData);

  this.compoundService.createCompound(compoundData).subscribe(
    (response) => {
      console.log('Compound created:', response);
    },
    (error) => {
      console.error('Error creating compound:', error);
    }
  );
} else {
  console.log('notValid');
}}
}
