import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  public selectedOptions: string[] = ["- الكل -", "Happy", "Happy", "Happy"];

  toggleDropdown(event: Event) {
    const element = event.target as HTMLElement;
    element.classList.toggle("select-clicked");
    const caret = element.querySelector(".caret");
    if (caret) {
      caret.classList.toggle("caret-rotate");
    }
    const menu = element.nextElementSibling as HTMLElement;
    if (menu) {
      menu.classList.toggle("menu-open");
    }
  }

  selectOption(event: Event, option: string, index: number) {
    const element = event.target as HTMLElement;
    this.selectedOptions[index] = option;
    element.parentElement?.classList.remove("select-clicked");
    const caret = element.parentElement?.querySelector(".caret");
    if (caret) {
      caret.classList.remove("caret-rotate");
    }
    const menu = element.parentElement?.nextElementSibling as HTMLElement;
    if (menu) {
      menu.classList.remove("menu-open");
    }
  }
}

