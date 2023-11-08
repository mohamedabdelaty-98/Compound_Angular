import { Component } from '@angular/core';
import { UploadImageService } from './upload-image.service';

@Component({
  selector: 'app-test-image',
  templateUrl: './test-image.component.html',
  styleUrls: ['./test-image.component.css']
})
export class TestImageComponent {
  imageUrl: string = "assets/Images/upload-icon.png";
  formData: { image: File | null, Id: number } = { image: null, Id: 0 };

  constructor(private uploadImageService: UploadImageService) { }

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
      this.uploadImageService.UploadImage(file, Id).subscribe(
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
