import { Injectable } from '@angular/core';
//import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ExerciseService {

  constructor(
    private http: HttpClient,
    //private router: Router
  ) { }

  get(/*{ page }*/) {
    return this.http.get(
      environment.api.exercise
    );
  }

  getOne(id: number) {
    return this.http.get(
      environment.api.exercise + '/' + id
    );
  }

  add(values) {
    values.unit = '/birt-api/public/api/units/' + values.unit;

    return this.http.post(
      environment.api.exercise,
      {
        observe: 'response',
        ...values
      }
    );
  }

  edit(id: number, values) {
    return this.http.put(
      environment.api.exercise + '/' + id,
      {
        observe: 'response',
        ...values
      }
    );
  }

  delete(id: number) {
    return this.http.delete(
      environment.api.exercise + '/' + id,
      {
        observe: 'response'
      }
    );
  }
}
