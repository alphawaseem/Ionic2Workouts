import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'workout-detail',
  templateUrl: 'workout.details.html',
})
export class WorkoutDetails{
  workout : any;
  constructor(public nav : NavController,public navParams : NavParams){
    this.workout = this.navParams.get('workout');
    console.log(this.workout);
  }
}