import { Component, OnInit } from '@angular/core';
import { Compound } from 'src/app/Models/compound';
import { CompoundService } from 'src/app/Services/CompoundServices/compound.service';

@Component({
  selector: 'app-get-compounds',
  templateUrl: './get-compounds.component.html',
  styleUrls: ['./get-compounds.component.scss'],
})
export class GetCompoundsComponent implements OnInit {
  compounddata: Compound[] = [];
  constructor(private servicecompund: CompoundService) {}
  ngOnInit(): void {
    this.servicecompund.getallcompounds().subscribe((data: any) => {
      this.compounddata = data.data;
      console.log(this.compounddata);
    });
  }
}
