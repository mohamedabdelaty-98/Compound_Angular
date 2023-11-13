import {
  Component,
  HostListener,
  ElementRef,
  Renderer2,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { elementAt } from 'rxjs';
import { AuthService } from 'src/app/account/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  scrolled: boolean = false;
  username: string | undefined;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private authService: AuthService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}
  ngOnInit(): void {
    AOS.init();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    this.scrolled = scrollPosition > 0;
  }
  logoutgg() {
    this.authService.logout();
    // Manually trigger change detection to update isAuthenticated
    this.cdr.detectChanges();
  }
  isauthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
  getusernamefromtoken(): string {
    return this.authService.getUserName();
  }
  getrouter() {
    this.router.navigate(['x/dashboard']);
  }
  getrole(): boolean {
    const role = this.authService.getUserRoles();
    if (role.includes('Admin')) return true;
    else return false;
  }
}
