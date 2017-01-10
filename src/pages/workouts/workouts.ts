import { Component,OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';
import { WorkoutService } from './../../app/services/workouts.service';

@Component({
  selector: 'workouts',
  templateUrl: 'workouts.html',
})
export class WorkoutsPage implements OnInit {
  workouts : any[]
  ngOnInit(){
    this.workoutService.getWorkouts().subscribe( workouts => {
      this.workouts = workouts;
    });
  }
  constructor( private workoutService : WorkoutService){

  }
}
