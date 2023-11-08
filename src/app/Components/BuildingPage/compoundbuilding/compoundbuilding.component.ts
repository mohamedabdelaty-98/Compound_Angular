import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Building } from 'src/app/Models/building';
import { BuildingsCompoundService } from 'src/app/Services/Building/buildings-compound.service';
import { FilterServiceService } from 'src/app/Services/FilterServices/filter-service.service';
import { GetBuidingImagesService } from '../../building-images/get-building-images.service';

@Component({
  selector: 'app-compoundbuilding',
  templateUrl: './compoundbuilding.component.html',
  styleUrls: ['./compoundbuilding.component.css'],
})
export class CompoundbuildingComponent implements OnInit {
  compoundId: number = 0;
  floornumber: number = 0;
  buildingnumbernumber: number = 0;
  buildingBedrromnumber: number = 0;
  buildingarea: string = '';
  Buildings: Building[] = [];
  selectedOption: string[] = ['- الكل -'];

  constructor(
    private buildingService: BuildingsCompoundService,
    private route: ActivatedRoute,
    private filterservice: FilterServiceService,
    private buildingimageservice: GetBuidingImagesService
  ) {
    this.compoundId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.filterservice.selectedOption$.subscribe((option) => {
      this.selectedOption = option;
      this.parseSelectedOption();
    });
  }

  getbuildingImages() {
    console.log('ddddd');
    this.Buildings.forEach((element) => {
      element.buildingimages = [];
      this.buildingService(7).subscribe((data: any) => {
        // console.log(this.compoundimage);
        // element.compoundimages=data.data;
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
          console.log(element.id);
          console.log(imageUrl);
          element.buildingimages.push(imageUrl);
          ////////////////////////////////////////////////////////
          console.log(element.buildingimages);
        } else {
          console.error('No building images found.');
        }
      });
    });
  }
  parseSelectedOption() {
    const [, bedroom, building, floor] = this.selectedOption.map((str) =>
      parseInt(str)
    );
    const area = this.selectedOption[0];
    switch (true) {
      case !isNaN(floor):
        this.getBuildingsbyfloor(floor);
        break;
      case !isNaN(building):
        this.getBuildingsbybuildingnumber(building);
        break;
      case !isNaN(bedroom):
        this.getBuildingsbybedroomunit(bedroom);
        break;
      case area === 'أكبر من ١٨٠م':
        this.getBuildingsbyBigarea(180);
        break;
      case area === 'أكبر من ١٥٠م':
        this.getBuildingsbyBigarea(150);
        break;
      case area === 'أقل من ١٨٠م':
        this.getBuildingsSamllarea(180);
        break;
      case area === 'أقل من ١٥٠م':
        this.getBuildingsSamllarea(150);
        break;
      default:
        this.getbuildingsinallcompound();
        break;
    }
  }

  getbuildingsinallcompound() {
    this.buildingService
      .getbuildingsbycompound(this.compoundId)
      .subscribe((data: any) => {
        this.Buildings = data.data;
      });
    this.getbuildingImages();
  }
  getBuildingsbyfloor(floor: number) {
    this.buildingService
      .getbuildingbyfloorunits(floor, this.compoundId)
      .subscribe((data: any) => {
        this.Buildings = data.data;
      });
  }
  getBuildingsbybuildingnumber(building: number) {
    this.buildingService
      .getbuildingbybuildingnumber(building, this.compoundId)
      .subscribe((data: any) => {
        console.log('-----------------------');
        console.log(this.buildingnumbernumber);

        this.Buildings = data.data;
      });
  }
  getBuildingsbybedroomunit(bedroom: number) {
    this.buildingService
      .getbuildingbybedroomsinunit(bedroom, this.compoundId)
      .subscribe((data: any) => {
        this.Buildings = data.data;
      });
  }
  getBuildingsbyBigarea(area: number) {
    this.buildingService
      .getbuildingbigarea(area, this.compoundId)
      .subscribe((data: any) => {
        this.Buildings = data.data;
      });
  }
  getBuildingsSamllarea(area: number) {
    this.buildingService
      .getbuildingbysmallarea(area, this.compoundId)
      .subscribe((data: any) => {
        this.Buildings = data.data;
      });
  }
}
