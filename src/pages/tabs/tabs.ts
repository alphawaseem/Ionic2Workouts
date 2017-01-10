import { Component } from '@angular/core';

import { WorkoutsPage } from '../workouts/workouts';
import { AboutPage } from '../about/about';
import { AddPage } from '../add/add';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = WorkoutsPage;
  tab2Root: any = AddPage;
  tab3Root: any = AboutPage;

  constructor() {

  }
}
