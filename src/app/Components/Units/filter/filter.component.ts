import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitFloorsService } from 'src/app/Services/Units/git-floors.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  compoundid: number = 3;
  floorsdata: string[] = [];
  constructor(
    private floorsservice: GitFloorsService,
    private route: ActivatedRoute
  ) {
    // this.compoundid = Number(this.route.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
    this.floorsservice
      .getfloorsbycompoundid(this.compoundid)
      .subscribe((data: any) => {
        this.floorsdata = data.data;
        console.log(this.floorsdata);
      });
  }
  public selectedOptions: string[] = ['- الكل -', 'Happy', 'Happy', 'Happy'];

  toggleDropdown(event: Event) {
    const element = event.target as HTMLElement;
    element.classList.toggle('select-clicked');
    const caret = element.querySelector('.caret');
    if (caret) {
      caret.classList.toggle('caret-rotate');
    }
    const menu = element.nextElementSibling as HTMLElement;
    if (menu) {
      menu.classList.toggle('menu-open');
    }
  }

  selectOption(event: Event, option: string, index: number) {
    const element = event.target as HTMLElement;
    this.selectedOptions[index] = option;
    element.parentElement?.classList.remove('select-clicked');
    const caret = element.parentElement?.querySelector('.caret');
    if (caret) {
      caret.classList.remove('caret-rotate');
    }
    const menu = element.parentElement?.nextElementSibling as HTMLElement;
    if (menu) {
      menu.classList.remove('menu-open');
    }
  }
}
