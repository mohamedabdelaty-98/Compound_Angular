import { Component } from '@angular/core';
import { Building } from 'src/app/Models/building';
import { GetAllBuildingsService } from 'src/app/services/Building/get-all-buildings.service';

@Component({
  selector: 'app-get-all-buildings',
  templateUrl: './get-all-buildings.component.html',
  styleUrls: ['./get-all-buildings.component.scss']
})
export class GetAllBuildingsComponent {
/**
 *
 */
buildingdata:Building[]=[];
constructor(private getallbuildins:GetAllBuildingsService) { }
ngOnInit(): void {
  this.getallbuildins.GetAllBuildings().subscribe((data: any) => {
    this.buildingdata = data.data;
    console.log(this.buildingdata);
  });
}
}
