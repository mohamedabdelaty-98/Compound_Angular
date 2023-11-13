import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Building } from 'src/app/Models/building';

import { DisplaybuildingimagesService } from 'src/app/Services/Building/displaybuildingimages.service';
import { BuildingService } from 'src/app/Services/Building/building.service';

@Component({
  selector: 'app-building-description',
  templateUrl: './building-description.component.html',
  styleUrls: ['./building-description.component.css'],
})
export class BuildingDescriptionComponent implements OnInit {
  buildingid: number = 0;
  buildingData: Building = {
    id: 0,
    description: '',
    bulidingNumber: 0,
    compoundId: 0,
    numberOfFloor: 0,
    sizeArea: 0,
    status: '',
    dateAdded: new Date(),
    buildingimages: [],
  };
  arr: string[] = [];
  constructor(
    private buildingService: BuildingService,
    private buildingimageservice: DisplaybuildingimagesService,
    private route: ActivatedRoute
  ) {
    this.buildingid = Number(this.route.snapshot.paramMap.get('buildingid'));
  }
  ngOnInit(): void {
    this.getbuilding();
  }
  getbuilding() {
    this.buildingService
      .getbuildingbyid(this.buildingid)
      .subscribe((data: any) => {
        this.buildingData = data.data;
        console.log(this.buildingData);
        this.getbuildingimage();
      });
  }
  getbuildingimage() {
    this.buildingData.buildingimages = [];
    this.buildingimageservice
      .displaybuildingimage(this.buildingData.id)
      .subscribe((data: any) => {
        console.log(data.data);
        if (data) {
          ///////////////////////////////////////////
          const binaryData = atob(data.data[0]);
          const uint8Array = new Uint8Array(binaryData.length);
          for (let i = 0; i < binaryData.length; i++) {
            uint8Array[i] = binaryData.charCodeAt(i);
          }
          const imageBlob = new Blob([uint8Array], { type: 'image/jpeg' }); // Adjust 'image/jpeg' to the appropriate image type if needed
          // console.log(imageBlob);
          const imageUrl = URL.createObjectURL(imageBlob);
          console.log(imageUrl);
          this.buildingData.buildingimages.push(imageUrl);
          this.arr.push(imageUrl);
          ////////////////////////////////////////////////////////
        } else {
          console.error('No building images found.');
        }
      });
  }
}
