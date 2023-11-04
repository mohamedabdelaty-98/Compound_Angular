import {
  Component,
  HostListener,
  ElementRef,
  Renderer2,
  OnInit,
} from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  scrolled: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    AOS.init();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    this.scrolled = scrollPosition > 0;
  }
}
