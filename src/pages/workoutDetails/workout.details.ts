import { Component } from '@angular/core';
import { WorkoutService } from '../../app/services/workouts.service';
import { NavController, NavParams } from 'ionic-angular';
import { WorkoutsPage } from '../workouts/workouts';
@Component({
  selector: 'workout-detail',
  templateUrl: 'workout.details.html',
})
export class WorkoutDetails{
  workout : any;
  result : any;
  constructor(public nav : NavController,public navParams : NavParams,private workoutService : WorkoutService){
    this.workout = this.navParams.get('workout');
  }
  deleteWorkout(id:string){
    this.workoutService.deleteWorkout(id).subscribe(result=>this.result=result,
    err => console.error(err),()=>console.log("deleted"));
    this.nav.setRoot(WorkoutsPage);
  }
}