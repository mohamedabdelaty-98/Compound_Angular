import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { Compound } from 'src/app/Models/compound';
import { CompoundService } from 'src/app/Services/CompoundServices/compound.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent implements OnInit {
  Compounds: Compound[]=[];
  numOfCompounds:any;

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(private classToggler: ClassToggleService, private compoundService: CompoundService) {
    super();
  }
  ngOnInit(): void {
    this.compoundService.getallcompounds().subscribe((data:any)=> {
      this.Compounds= data.data;
      console.log(this.Compounds);
      this.numOfCompounds= this.Compounds.length;
    })  


  }
}
