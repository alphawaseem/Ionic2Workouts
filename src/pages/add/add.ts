import { Component } from '@angular/core';
import { WorkoutService } from '../../app/services/workouts.service';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {
  title : string;
  note : string;
  type : string;
  result : string;
  constructor(public navCtrl: NavController,private workoutService : WorkoutService) {

  }
  
  onSubmit(){
    if(!this.title) return false;
    let workout = {
      title : this.title,
      note : this.note,
      type : this.type
    }
    this.workoutService.addWorkout(workout).subscribe(data=>this.result=data,err=>console.error(err), ()=>{
      console.log('added');
    });
  }
}
