import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesBuilding } from 'src/app/Models/services-building';
import { ServiceProjectBuildingService } from 'src/app/Services/ServiceBuilding/service-project-building.service';

@Component({
  selector: 'app-service-building',
  templateUrl: './service-building.component.html',
  styleUrls: ['./service-building.component.css'],
})
export class ServiceBuildingComponent implements OnInit {
  buildingid: number = 7;
  servcebuildingdata: ServicesBuilding[] = [];
  constructor(
    private sercvicebuilding: ServiceProjectBuildingService,
    private route: ActivatedRoute
  ) {
    // this.buildingid = Number(this.route.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
    this.sercvicebuilding
      .getservceBuilding(this.buildingid)
      .subscribe((data: any) => {
        this.servcebuildingdata = data.data;
        console.log(this.servcebuildingdata);
      });
  }
}
