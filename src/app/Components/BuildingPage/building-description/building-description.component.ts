import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Building } from 'src/app/Models/building';
import { BuildingService } from 'src/app/Services/Building/building.service';

@Component({
  selector: 'app-building-description',
  templateUrl: './building-description.component.html',
  styleUrls: ['./building-description.component.css'],
})
export class BuildingDescriptionComponent implements OnInit {
  buildingid: number = 7;
  buildingdata: Building = {
    id: 0,
    description: '',
    bulidingNumber: 0,
    compoundId: 0,
    latitude: 0,
    longitude: 0,
    numberOfFloor: 0,
    sizeArea: 0,
    status: '',
    dateAdded: new Date(),
  };
  constructor(
    private buildingservice: BuildingService,
    private route: ActivatedRoute
  ) {
    // this.buildingid = Number(this.route.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
    this.buildingservice
      .getbuildingbyid(this.buildingid)
      .subscribe((data: any) => {
        this.buildingdata = data.data;
        console.log(this.buildingdata);
      });
  }
}
