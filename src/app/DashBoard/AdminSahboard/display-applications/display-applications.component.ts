import { Component , OnInit} from '@angular/core';
import { ApplicationsService } from 'src/app/services/Admin/applications.service';

@Component({
  selector: 'app-display-applications',
  templateUrl: './display-applications.component.html',
  styleUrls: ['./display-applications.component.scss']
})
export class DisplayApplicationsComponent implements OnInit {


  constructor( private applicationService: ApplicationsService) {
  }

  applications:any;
  ngOnInit(): void {

    this.applicationService.getAllApplications().subscribe((data:any)=>{

      this.applications= data.data;
    })
  }



}
