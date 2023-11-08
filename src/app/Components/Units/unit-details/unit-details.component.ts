import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-unit-details',
  templateUrl: './unit-details.component.html',
  styleUrls: ['./unit-details.component.css'],
})
export class UnitDetailsComponent {
form:FormGroup;

/**
 *
 */
constructor(private formBuilder:FormBuilder) {
this.form= this.formBuilder.group({
  name:['',[Validators.required,Validators.minLength(3)]],
  PhoneNumber:['',[Validators.required,Validators.pattern(/^\+966\s(1[1-9]|5[0-9]|8[0-9])\s\d{7}$/)]],//regex for numbers in saudi arabia
  email:['',[Validators.required,Validators.email]],
  budget:['',[Validators.required,Validators.min(100000)]],
})
}
onSubmit(){
  if(this.form.valid){
    const formData = this.form.value;
    console.log(formData);
  }
}
}
