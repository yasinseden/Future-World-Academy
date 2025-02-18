import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveTabService {

  activeTab: string = '/'

  constructor() {}

  getActiveTab() {
    return this.activeTab
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
