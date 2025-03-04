import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActiveTabService } from '../../shared/services/active-tab.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  activeTab: number = 1;

  constructor(private router: Router, private activeTabService: ActiveTabService) {
    activeTabService.activeTabObservable$.subscribe(tab => this.activeTab = tab)
  }

  navigateTo(path: string, active: number) {
    this.router.navigate([path]);
    this.activeTabService.activeTabBehaviorSubject.next(active)
  }

}
