import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { WorkoutService } from './../../app/services/workouts.service';

@Component({
  selector: 'workouts',
  templateUrl: 'workouts.html',
})
export class WorkoutsPage {
  constructor( private workoutService : WorkoutService){

  }
}
