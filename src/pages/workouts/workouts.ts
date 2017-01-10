import { Component,OnInit } from '@angular/core';

import { NavController,NavParams } from 'ionic-angular';
import { WorkoutService } from './../../app/services/workouts.service';
import { WorkoutDetails } from './../workoutDetails/workout.details';
@Component({
  selector: 'workouts',
  templateUrl: 'workouts.html',
})
export class WorkoutsPage implements OnInit {
  workouts : any[]
  lastSelectedWorkout : any ;
  ngOnInit(){
    this.getWorkouts();
  }
  getWorkouts(){
    this.workoutService.getWorkouts().subscribe( workouts => {
      this.workouts = workouts;
    });
  }
  constructor(public navCtrl: NavController, private workoutService : WorkoutService){

  }
  workoutSelected(event,workout){
    this.lastSelectedWorkout = workout ;
    this.navCtrl.push(WorkoutDetails,{
      workout : workout
    });
    console.log(this.lastSelectedWorkout);
  }
}
