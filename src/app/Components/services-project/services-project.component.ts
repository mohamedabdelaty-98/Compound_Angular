import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AmentiesProjectCmopound } from 'src/app/Models/amenties-project-cmopound';
import { AmentiesServicesService } from 'src/app/Services/AmentiesServicesCompound/amenties-services.service';

@Component({
  selector: 'app-services-project',
  templateUrl: './services-project.component.html',
  styleUrls: ['./services-project.component.css'],
})
export class ServicesProjectComponent implements OnInit {
  compoundid: number = 0;
  Amenties: AmentiesProjectCmopound[] = [];
  constructor(
    private serviceproject: AmentiesServicesService,
    private route: ActivatedRoute
  ) {
    this.compoundid = Number(this.route.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
    this.serviceproject
      .getallservicescompound(this.compoundid)
      .subscribe((data: any) => {
        this.Amenties = data.data;
        console.log(this.Amenties);
      });
  }
}
