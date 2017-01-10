import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { AddPage } from '../pages/add/add';
import { TabsPage } from '../pages/tabs/tabs';
import { WorkoutDetails } from '../pages/workoutDetails/workout.details';
import { WorkoutsPage } from '../pages/workouts/workouts';
import { WorkoutService} from './services/workouts.service';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    AddPage,
    TabsPage,
    WorkoutsPage,
    WorkoutDetails,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    AddPage,
    WorkoutsPage,
    TabsPage,
    WorkoutsPage,
    WorkoutDetails
  ],
  providers: [WorkoutService,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
