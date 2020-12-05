import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ExerciseService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getExercises({ pag }){
    return this.http.get(
      environment.api.exercise,
      {
        observe: 'response'
      }
    );
  }

  getExercise({ id }){
    return this.http.get(
      environment.api.exercise + '/' + id,
      {
        observe: 'response'
      }
    );
  }

  addExercise({ id }){
    return this.http.post(
      environment.api.exercise + '/' + id,
      {
        observe: 'response'
      }
    );
  }

  editExercise({ id }){
    return this.http.put(
      environment.api.exercise + '/' + id,
      {
        observe: 'response'
      }
    );
  }

  deleteExercise({ id }){
    return this.http.delete(
      environment.api.exercise + '/' + id,
      {
        observe: 'response'
      }
    );
  }

}
