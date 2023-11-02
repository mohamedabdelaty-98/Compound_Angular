import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  currentPage = 1;

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
