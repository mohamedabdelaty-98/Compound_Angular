import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {


  currentPage = 1;
  numCards = 26; // Replace with the actual number of cards
  cardsPerPage = 9; // Number of cards to display per page
  numPages = Math.ceil(this.numCards / this.cardsPerPage);
  cards: any[] = []; 

  constructor() {
    for (let i = 1; i <= this.numCards; i++) {
      const page = Math.ceil(i / this.cardsPerPage);
      this.cards.push({ id: i, page });
    }
    console.log(this.cards);
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
