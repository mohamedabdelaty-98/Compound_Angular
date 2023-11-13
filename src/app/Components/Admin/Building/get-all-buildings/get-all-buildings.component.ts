import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Building } from 'src/app/Models/building';
import { GetAllBuildingsService } from 'src/app/Services/Building/get-all-buildings.service';
import { DeleteBuildingService } from 'src/app/Services/Building/delete-building.service';

@Component({
  selector: 'app-get-all-buildings',
  templateUrl: './get-all-buildings.component.html',
  styleUrls: ['./get-all-buildings.component.scss'],
})
export class GetAllBuildingsComponent {
  buildingdata: Building[] = [];

  constructor(
    private getallbuildins: GetAllBuildingsService,
    private route: Router,
    private deletebuilding: DeleteBuildingService
  ) {}

  RouteAddBuilding() {
    this.route.navigate(['addBuilding']);
  }

  deleteBuilding(buildingid: number) {
    console.log('inside delete');
    this.deletebuilding.DeleteBuilding(buildingid).subscribe(
      (response) => {
        console.log(response);
        // After successful deletion, refresh the data
        this.refreshBuildingData();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  private refreshBuildingData() {
    this.getallbuildins.GetAllBuildings().subscribe((data: any) => {
      this.buildingdata = data.data;
      console.log(this.buildingdata);
    });
  }

  ngOnInit(): void {
    this.getallbuildins.GetAllBuildings().subscribe((data: any) => {
      this.buildingdata = data.data;
      console.log(this.buildingdata);
    });
  }
}
