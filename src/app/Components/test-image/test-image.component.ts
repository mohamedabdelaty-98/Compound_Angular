import { Component, OnInit } from '@angular/core';
import { UploadImageService } from './upload-image.service';
import { CompoundService } from 'src/app/Services/CompoundServices/compound.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-image',
  templateUrl: './test-image.component.html',
  styleUrls: ['./test-image.component.css']
})
export class TestImageComponent implements OnInit {
  imageUrl: string = "assets/Images/upload-icon.png";
  formData: { image: File | null, Id: number } = { image: null, Id: 0 };
  compounddata:any;
  compoundId:number=0;
  yourForm: FormGroup;

  constructor(private uploadImageService: UploadImageService, private servicecompund:CompoundService,private formBuilder: FormBuilder ){ 
    this.yourForm = this.formBuilder.group({
      compoundId: ['', Validators.required]});
      
  }
  


  ngOnInit(): void {
    this.servicecompund.getallcompounds().subscribe((data: any) => {
      this.compounddata = data.data;
      console.log(this.compounddata);
    });
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.formData.image = file;
  }

    handleFileInput() {
    console.log("inside action");
    const file = this.formData.image;
    const Id = this.formData.Id;
    console.log(Id);
    console.log(file);

    if (file) {
      this.uploadImageService.UploadImage(file,this.compoundId).subscribe(
        (response) => {
          // Handle the API response after successful upload
          console.log('Image uploaded successfully:', response);
        },
        (error) => {
          // Handle errors if the upload fails
          console.error('Image upload failed:', error);
        }
      );
    }
  }
}
function handleFileInput() {
  throw new Error('Function not implemented.');
}

