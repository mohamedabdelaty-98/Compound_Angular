import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-building-images',
  templateUrl: './building-images.component.html',
  styleUrls: ['./building-images.component.css']
})
/**
 *
 */
export class BuildingImagesComponent implements OnInit {
  buildingId = 7; // Replace with the actual building ID.
  imageUrls: string[] = [];
  imageData:any;
  constructor(private http: HttpClient,private Sanitizer:DomSanitizer) {}

  ngOnInit() {
    //this.loadBuildingImages();
    this.loadImages();
  }
  getImage() {
    return this.http.get(`http://localhost:52141/api/BuildingImage/GetBuildingImages/${this.buildingId}`, { responseType: 'arraybuffer' });
  }
  loadImages() {
    this.getImage().subscribe((imageData: ArrayBuffer) => {
      if (imageData) {
        const contentType = 'image/jpeg'; // Replace with the appropriate content type.
        const imageUrl = this.convertArrayBufferToDataURL(imageData, contentType);
        this.imageUrls = [imageUrl];
        console.log(imageUrl);
      }
    });
    }
    convertArrayBufferToDataURL(arrayBuffer: ArrayBuffer, contentType: string): string {
      const blob = new Blob([new Uint8Array(arrayBuffer)], { type: contentType });
      const urlCreator = window.URL || window.webkitURL;
      return urlCreator.createObjectURL(blob);
    }
  }

  // loadImages() {
  //   this.getImage().subscribe((data: any) => {
  //     console.log(data);
  //     this.imageUrls = data[1].map((imageData:any) => {
  //       const blob = new Blob([imageData], { type: 'image/*' }); // Specify the appropriate content type here.
  //       return URL.createObjectURL(blob);
  //       console.log(blob);
  //     });
  //   });
  // loadImage() {
  //   this.getImage().subscribe((data: any) => {
  //     // const bytes = new Uint8Array(data);
  //     //  console.log(data);
  //     const blob : Blob= data.body as Blob; // Adjust the content type based on the image type
  //     console.log(blob);
  //     this.imageData = this.Sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));
  //     console.log(this.imageData);
  //     this.imageUrls.push(this.imageData);
  //   });
  // }
  // loadBuildingImages() {
  //   const apiUrl = `http://localhost:52141/api/BuildingImage/GetBuildingImages/${this.buildingId}`;
  //   this.http.get(apiUrl,{ responseType: 'arraybuffer' }).subscribe(
  //     (data: any) => {
  //       if (data.data.length > 0) {
  //         // const imageBytes = new Uint8Array(data.data[0]);
  //         // console.log(data.data[0]);
  //         // console.log([imageBytes]);
  //         const imageBlob = new Blob([data.data[0]], { type: 'image/*' }); // Adjust 'image/jpeg' to the appropriate image type if needed
  //         console.log(imageBlob);
  //         const imageUrl = URL.createObjectURL(imageBlob);
  //         console.log(imageUrl);
  //         this.imageUrls.push(imageUrl);
  //         console.log(this.imageUrls);
  //       } else {
  //         console.error('No building images found.');
  //       }
  //     },
  //     (error) => {
  //       console.error('Error fetching building images:', error);
  //     }
  //   );
  // }
