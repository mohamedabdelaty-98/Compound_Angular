import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Building } from 'src/app/Models/building';
import { BuildingService } from 'src/app/services/Building/building.service';

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
    latitude: 0,
    longitude: 0,
    numberOfFloor: 0,
    sizeArea: 0,
    status: '',
    dateAdded: new Date(),
  };
  constructor(
    private buildingService: BuildingService,
    private route: ActivatedRoute
  ) {
    this.buildingid = Number(this.route.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
    this.buildingService
      .getbuildingbyid(this.buildingid)
      .subscribe((data: any) => {
        this.buildingData = data.data;
        console.log(this.buildingData);
      });


  }
}
