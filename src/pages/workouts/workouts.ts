import { Component,OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';
import { WorkoutService } from './../../app/services/workouts.service';

@Component({
  selector: 'workouts',
  templateUrl: 'workouts.html',
})
export class WorkoutsPage implements OnInit {
  ngOnInit(){
    this.workoutService.getWorkouts().subscribe( workouts => {
        console.log(workouts);
    });
  }
  constructor( private workoutService : WorkoutService){
  }
}
