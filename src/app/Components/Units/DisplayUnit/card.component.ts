import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { UnitDetailsComponent } from '../unit-details/unit-details.component';
import { Unit } from 'src/app/Models/unit';
import { FilterServiceService } from 'src/app/Services/FilterServices/filter-service.service';
import { ActivatedRoute } from '@angular/router';
import { GetunitsService } from 'src/app/services/Units/getunits.service';
import { BuildingsCompoundService } from 'src/app/Services/Building/buildings-compound.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  currentPage = 1;
  numCards = 26; // Replace with the actual number of cards
  cardsPerPage = 9; // Number of cards to display per page
  unitdata: Unit[] = [];
  pages: number[] = [];
  cards: any[] = [];
  compoundId: number = 0;
  selectedOption: string[] = ['- الكل -'];

  constructor(
    public dialog: MatDialog,
    private unitservice: GetunitsService,
    private filterservice: FilterServiceService,
    private buildingservice: BuildingsCompoundService,
    private route: ActivatedRoute
  ) {
    this.compoundId = Number(this.route.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
    // this.getunitdata();
    this.updatePages();
    this.showPage(this.currentPage);
    this.filterservice.selectedOption$.subscribe((option) => {
      this.selectedOption = option;
      this.parseSelectedOption();
    });
  }
  getunitdata() {
    this.unitservice.GetALlUnit().subscribe((data: any) => {
      this.unitdata = data.data;
      for (let i = 1; i <= this.unitdata.length; i++) {
        const page = Math.ceil(i / this.cardsPerPage);
        this.cards.push({ id: i, page });
      }
    });
  }

  parseSelectedOption() {
    const [, bedroom, building, floor] = this.selectedOption.map((str) =>
      parseInt(str)
    );
    const area = this.selectedOption[0];
    this.cards = [];

    switch (true) {
      case !isNaN(floor):
        this.getunitsbyfloor(floor);
        break;
      case !isNaN(building):
        this.getunitsbybuildingnumber(building);
        break;
      case !isNaN(bedroom):
        this.getunitsbybedroom(bedroom);
        break;
      case area === 'أكبر من ١٨٠م':
        this.getunitsbyBigarea(180);
        break;
      case area === 'أكبر من ١٥٠م':
        this.getunitsbyBigarea(150);
        break;
      case area === 'أقل من ١٨٠م':
        this.getunitsSamllarea(180);
        break;
      case area === 'أقل من ١٥٠م':
        this.getunitsSamllarea(150);
        break;
      default:
        this.getunitdata();
        break;
    }
  }

  getunitsbyfloor(floor: number) {
    this.unitservice
      .getunitbyfloorunits(floor, this.compoundId)
      .subscribe((data: any) => {
        this.unitdata = data.data;
        console.log(this.compoundId);
        for (let i = 1; i <= this.unitdata.length; i++) {
          const page = Math.ceil(i / this.cardsPerPage);
          this.cards.push({ id: i, page });
        }
      });
  }
  getunitsbybuildingnumber(building: number) {
    this.buildingservice
      .getbuildingbybuildingnumber(building, this.compoundId)
      .subscribe((data: any) => {
        this.unitdata = data.data;
        for (let i = 1; i <= this.unitdata.length; i++) {
          const page = Math.ceil(i / this.cardsPerPage);
          this.cards.push({ id: i, page });
        }
      });
  }
  getunitsbybedroom(bedroom: number) {
    this.buildingservice
      .getbuildingbybedroomsinunit(bedroom, this.compoundId)
      .subscribe((data: any) => {
        this.unitdata = data.data;
        for (let i = 1; i <= this.unitdata.length; i++) {
          const page = Math.ceil(i / this.cardsPerPage);
          this.cards.push({ id: i, page });
        }
      });
  }

  getunitsbyBigarea(area: number) {
    this.buildingservice
      .getbuildingbigarea(area, this.compoundId)
      .subscribe((data: any) => {
        this.unitdata = data.data;
        for (let i = 1; i <= this.unitdata.length; i++) {
          const page = Math.ceil(i / this.cardsPerPage);
          this.cards.push({ id: i, page });
        }
      });
  }
  getunitsSamllarea(area: number) {
    this.buildingservice
      .getbuildingbysmallarea(area, this.compoundId)
      .subscribe((data: any) => {
        this.unitdata = data.data;
        for (let i = 1; i <= this.unitdata.length; i++) {
          const page = Math.ceil(i / this.cardsPerPage);
          this.cards.push({ id: i, page });
        }
      });
  }
  updatePages() {
    this.pages = [];
    for (
      let i = 1;
      i <= Math.ceil(this.unitdata.length / this.cardsPerPage);
      i++
    ) {
      this.pages.push(i);
    }
  }

  showPage(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.showPage(this.currentPage);
    }
  }

  nextPage() {
    if (this.currentPage < this.pages.length) {
      this.currentPage++;
      this.showPage(this.currentPage);
    }
  }

  openDialog(unitid: number) {
    const dialogRef = this.dialog.open(UnitDetailsComponent);
    data: {
      unitid;
    }

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
