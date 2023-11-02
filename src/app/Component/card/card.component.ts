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
   numPages = Math.ceil(this.numCards / this.cardsPerPage); // Calculate the number of pages
  
  showPage(pageNumber: number) {
    this.currentPage=pageNumber;
  const cards = document.querySelectorAll('.card');
  cards.forEach((card:any) => {
    if (parseInt(card.getAttribute('data-page')) === pageNumber) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });

  document.querySelectorAll('.pagination a').forEach((pageLink) => {
    pageLink.classList.remove('active');
  });
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
