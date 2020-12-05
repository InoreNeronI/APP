import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class UnitService {
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getUnits({ pag }){
    return this.http.get(
      environment.api.exercise,
      {
        observe: 'response'
      }
    );
  }

  getUnit({ id }){
    return this.http.get(
      environment.api.exercise + '/' + id,
      {
        observe: 'response'
      }
    );
  }

  addUnit({ id }){
    return this.http.post(
      environment.api.exercise + '/' + id,
      {
        observe: 'response'
      }
    );
  }

  editUnit({ id }){
    return this.http.put(
      environment.api.exercise + '/' + id,
      {
        observe: 'response'
      }
    );
  }

  deleteUnit({ id }){
    return this.http.delete(
      environment.api.exercise + '/' + id,
      {
        observe: 'response'
      }
    );
  }

}
