import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Building } from 'src/app/Models/building';
import { BuildingsCompoundService } from 'src/app/Services/Building/buildings-compound.service';
import { FilterServiceService } from 'src/app/Services/FilterServices/filter-service.service';

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
    private filterservice: FilterServiceService
  ) {
    this.compoundId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.filterservice.selectedOption$.subscribe((option) => {
      this.selectedOption = option;
      this.parseSelectedOption();
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
