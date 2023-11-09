import { Component, OnInit } from '@angular/core';
import { Unit } from 'src/app/Models/unit';
import { DeleteunitService } from 'src/app/services/Units/deleteunit.service';
import { GetallService } from 'src/app/services/Units/getall.service';

@Component({
  selector: 'app-getallunit',
  templateUrl:'./getallunit.component.html',
  styleUrls: ['./getallunit.component.scss']
})
export class GetallunitComponent implements OnInit {
  unitdata: Unit[] = [];
  constructor(
    private getallunit: GetallService,
    private deleteunit: DeleteunitService

    ) {}
    Deleteunit(Id: number) {
      console.log("inside delete");
      this.deleteunit.Deleteunit(Id).subscribe(
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
      this.getallunit.getallunit().subscribe((data: any) => {
        this.unitdata = data.data;
        console.log(this.unitdata);
      });
    }
  
    
  ngOnInit(): void {
    this.getallunit.getallunit().subscribe((data: any) => {
      this.unitdata = data.data;
      console.log(this.unitdata);
    });
  }
  
}
