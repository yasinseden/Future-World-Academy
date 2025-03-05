import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActiveTabService } from '../../shared/services/active-tab.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  activeTab: number = 1;

  constructor(private router: Router, private activeTabService: ActiveTabService) {
    activeTabService.activeTabObservable$.subscribe(tab => this.activeTab = tab)
  }

  openNavBar() {
    const el = document.getElementById('mobileNavLinks');
    const el2 = document.getElementById('mobileNavLinksChild');
    if (el && el2) {
      el.style.transform = 'translateY(0)'
      el2.style.transform = 'translateY(0)'
    }
  }
  
  closeNavBar() {
    const el = document.getElementById('mobileNavLinks');
    const el2 = document.getElementById('mobileNavLinksChild');
    if (el && el2) {
      el.style.transform = 'translateY(-100%)'
      el2.style.transform = 'translateY(-100%)'
    }
  }

  navigateTo(path: string, active: number) {
    this.router.navigate([path]);
    this.activeTabService.activeTabBehaviorSubject.next(active);

    if (active === 3) {
      this.toggleCoursesLinks();
    };
    this.closeNavBar();
  }

  isCoursesLinksOpen: boolean = false;
  toggleCoursesLinks() {
    const el = document.getElementById('courses-hamburger');
    if (el) {
      if (el.classList.contains('h-0')) {
        el.classList.remove('h-0');
        this.isCoursesLinksOpen = true;
      } else {
        el.classList.add('h-0')
        this.isCoursesLinksOpen = false;
      }
    }

  }

}
