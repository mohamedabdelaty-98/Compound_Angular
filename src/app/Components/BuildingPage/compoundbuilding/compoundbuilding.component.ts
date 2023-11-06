import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Building } from 'src/app/Models/building';
import { BuildingsCompoundService } from 'src/app/services/Building/buildings-compound.service';

@Component({
  selector: 'app-compoundbuilding',
  templateUrl: './compoundbuilding.component.html',
  styleUrls: ['./compoundbuilding.component.css']
})
export class CompoundbuildingComponent implements OnInit{
  compoundId:number =0;
  Buildings: Building[]=[];

  constructor( private buildingService:BuildingsCompoundService,private route:ActivatedRoute ) {

    this.compoundId= Number(this.route.snapshot.paramMap.get('id'));
    
  }

 

  ngOnInit(): void {
    this.buildingService.getbuildingsbycompound(this.compoundId).subscribe((data:any)=> {
      this.Buildings= data.data;
      console.log(this.Buildings);
    })
  }

  
}
