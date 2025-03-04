import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveTabService {

  activeTabBehaviorSubject: BehaviorSubject<any> = new BehaviorSubject<number>(1);
  activeTabObservable$: Observable<number> = this.activeTabBehaviorSubject.asObservable();

  constructor() {}

}
