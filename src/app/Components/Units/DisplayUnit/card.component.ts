import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { UnitDetailsComponent } from '../unit-details/unit-details.component';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  currentPage = 1;
  numCards = 26; // Replace with the actual number of cards

  cardsPerPage = 9; // Number of cards to display per page
  numPages = Math.ceil(this.numCards / this.cardsPerPage); // Calculate the number of pages
  cards: any[] = [];

  constructor(public dialog: MatDialog) {
    for (let i = 1; i <= this.numCards; i++) {
      const page = Math.ceil(i / this.cardsPerPage);
      this.cards.push({ id: i, page });
    }
    console.log(this.cards);
  }
  openDialog() {
    const dialogRef = this.dialog.open(UnitDetailsComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
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
    if (this.currentPage < 3) {
      this.currentPage++;
      this.showPage(this.currentPage);
    }
  }
}
