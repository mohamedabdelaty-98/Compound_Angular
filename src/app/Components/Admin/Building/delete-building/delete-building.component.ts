import { Component } from '@angular/core';
import { DeleteBuildingService } from 'src/app/services/Building/delete-building.service';

@Component({
  selector: 'app-delete-building',
  templateUrl: './delete-building.component.html',
  styleUrls: ['./delete-building.component.scss']
})
export class DeleteBuildingComponent {
  /**
   *
   */
  buildingid:number=0;
  constructor(private deletebuilding:DeleteBuildingService) {}
  deleteBuilding(){
    this.deletebuilding.DeleteBuilding(this.buildingid).subscribe(
      (response) => {
      console.log(response);
    },
    (error)=>{
    console.log(error);
    }
    );
  }
}
