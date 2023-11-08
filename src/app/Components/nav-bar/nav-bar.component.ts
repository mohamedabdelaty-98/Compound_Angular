import {
  Component,
  HostListener,
  ElementRef,
  Renderer2,
  OnInit,
} from '@angular/core';
import * as AOS from 'aos';
import { AuthService } from 'src/app/account/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  scrolled: boolean = false;
  isAuthenticated: boolean = this.authService.isAuthenticated();
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    AOS.init();
    console.log(this.isAuthenticated);
    console.log(this.authService.getToken());
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    this.scrolled = scrollPosition > 0;
  }
  logout() {
    this.authService.logout();
  }
}
