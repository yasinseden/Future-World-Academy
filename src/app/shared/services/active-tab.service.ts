import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveTabService {

  activeTabBehaviorSubject: BehaviorSubject<any> = new BehaviorSubject<number>(1);
  activeTabObservable$: Observable<number> = this.activeTabBehaviorSubject.asObservable();

  constructor(private router: Router, private route: ActivatedRoute) {
    const activeUrl = this.router.url;
    this.declareCurrentPage(activeUrl)
    console.log(activeUrl);
    
  }

  declareCurrentPage(url: any) {
    switch (url) {
      case '/home':
        this.activeTabBehaviorSubject.next(1)
        break;
      case '/about':
        this.activeTabBehaviorSubject.next(2)
        break;
      case '/school-education':
        this.activeTabBehaviorSubject.next(3)
        break;
      case '/school-education-details':
        this.activeTabBehaviorSubject.next(3)
        break;
      case '/vocational-education':
        this.activeTabBehaviorSubject.next(3)
        break;
      case '/vocational-education-details':
        this.activeTabBehaviorSubject.next(3)
        break;
      case '/adult-education':
        this.activeTabBehaviorSubject.next(3)
        break;
      case '/job-shadowing':
        this.activeTabBehaviorSubject.next(3)
        break;
      case '/education-centers':
        this.activeTabBehaviorSubject.next(4)
        break;
      case '/contact-us':
        this.activeTabBehaviorSubject.next(5)
        break;
      default:
        this.activeTabBehaviorSubject.next(1)
        break;
    }
  }

}
