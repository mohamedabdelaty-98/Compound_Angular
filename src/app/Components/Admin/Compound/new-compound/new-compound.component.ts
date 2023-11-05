import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewCompoundService } from 'src/app/Services/CompoundServices/new-compound.service';

@Component({
  selector: 'app-new-compound',
  templateUrl: './new-compound.component.html',
  styleUrls: ['./new-compound.component.css'],
})
export class NewCompoundComponent {
  compoundForm: FormGroup;
  File: File | null = null;

  constructor(
    private compoundService: NewCompoundService,
    private formBuilder: FormBuilder
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
    }
  }
}
