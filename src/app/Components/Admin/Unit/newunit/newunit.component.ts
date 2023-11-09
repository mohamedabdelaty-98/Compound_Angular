import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as L from 'leaflet';
import { ActivatedRoute } from '@angular/router';
import { NewunitService } from 'src/app/services/Units/newunit.service';

@Component({
  selector: 'app-newunit',
  templateUrl: './newunit.component.html',
  styleUrls: ['./newunit.component.scss']
})
export class NewunitComponent {
  UnitForm: FormGroup;
  

  constructor(
    private newunit: NewunitService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.UnitForm = this.formBuilder.group({
      unitNumber: [0, Validators.required],
      floor: [0, Validators.required],
      description: ['', Validators.required],
      numberOfBedrooms: [0, Validators.required],
      status: ['', Validators.required],
      price: [0, Validators.required],
      area: [0, Validators.required],
      bulidingNumber: [0, Validators.required],     
    });
  }
  
  
  onSubmit() {
    console.log('hello');
    if (this.UnitForm.valid) {
      const UnitData = new FormData();

      console.log(UnitData);

      for (const key in this.UnitForm.value) {
       
        UnitData.append(key, this.UnitForm.value[key]);            
      this.newunit.createunit(UnitData).subscribe(
        (response) => {
          console.log('Unit created:', response);
        },
        (error) => {
          console.error('Error creating Unit:', error);
        }
      );
    } 
  }
  }
  
}