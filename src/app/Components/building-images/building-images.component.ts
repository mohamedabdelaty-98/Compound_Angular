import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-building-images',
  templateUrl: './building-images.component.html',
  styleUrls: ['./building-images.component.css'],
})
/**
 *
 */
export class BuildingImagesComponent implements OnInit {
  buildingId = 7; // Replace with the actual building ID.
  imageUrls: string[] = [];
  imageData: any;
  constructor(private http: HttpClient, private Sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.loadBuildingImages();
  }
  loadBuildingImages() {
    const apiUrl = `http://localhost:52141/api/BuildingImage/GetBuildingImages/${this.buildingId}`;
    this.http.get(apiUrl, { responseType: 'json' }).subscribe(
      (data: any) => {
        console.log(data);
        if (data) {
          console.log(data.data);
          ///////////////////////////////////////////
          const binaryData = atob(data.data[0]);
          const uint8Array = new Uint8Array(binaryData.length);
          for (let i = 0; i < binaryData.length; i++) {
            uint8Array[i] = binaryData.charCodeAt(i);
          }
          const imageBlob = new Blob([uint8Array], { type: 'image/jpeg' }); // Adjust 'image/jpeg' to the appropriate image type if needed
          console.log(imageBlob);
          const imageUrl = URL.createObjectURL(imageBlob);
          console.log(imageUrl);
          this.imageUrls.push(imageUrl);
          ////////////////////////////////////////////////////////
          console.log(this.imageUrls);
        } else {
          console.error('No building images found.');
        }
      },
      (error) => {
        console.error('Error fetching building images:', error);
      }
    );
  }
}
