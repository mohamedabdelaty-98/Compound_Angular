import { Component, OnInit } from '@angular/core';
import { Compound } from 'src/app/Models/compound';
import { CompoundService } from 'src/app/Services/CompoundServices/compound.service';
import * as Aos from 'aos';

@Component({
  selector: 'app-compound-cards',
  templateUrl: './compound-cards.component.html',
  styleUrls: ['./compound-cards.component.css'],
})
export class CompoundCardsComponent implements OnInit {
  mydata: Compound[] = [];
  constructor(private compoundservice: CompoundService) {}
  ngOnInit(): void {
    Aos.init();
    this.compoundservice.getallcompounds().subscribe((data: any) => {
      this.mydata = data.data;
      console.log(this.mydata);
    });
  }
  // getall() {
  //   this.compoundservice.getAllComponents().subscribe((data: any) => {
  //     this.mydata = data.data;
  //     console.log(this.mydata);
  //   });
  // }
}
