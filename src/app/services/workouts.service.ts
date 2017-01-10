import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WorkoutService {
    apiKey : string = 'WFe3k2u8NqXUdvVA-qk30SKzqgZ4Lpwt';
    mLabBaseUrl : string = 'https://api.mlab.com/api/1/';
    workoutsPath : string = '/databases/workouts/collections/workouts';
    constructor(private http : Http){
        console.log('Connected');
    }

    getWorkouts(){
       return this.http.get(this.mLabBaseUrl + this.workoutsPath + '?apiKey=' + this.apiKey)
        .map( res => res.json());
    }
}