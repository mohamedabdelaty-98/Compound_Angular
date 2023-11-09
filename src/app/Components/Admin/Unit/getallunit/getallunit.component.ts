import { Component, OnInit } from '@angular/core';
import { Unit } from 'src/app/Models/unit';
import { GetallService } from 'src/app/services/Units/getall.service';

@Component({
  selector: 'app-getallunit',
  templateUrl: './getallunit.component.html',
  styleUrls: ['./getallunit.component.scss']
})
export class GetallunitComponent implements OnInit {
  unitdata: Unit[] = [];
  constructor(private getallunit: GetallService) {}
  ngOnInit(): void {
    this.getallunit.getallunit().subscribe((data: any) => {
      this.unitdata = data.data;
      console.log(this.unitdata);
    });
  }
  
}
