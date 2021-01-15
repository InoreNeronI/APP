import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import { environment} from '../../../environments/environment';

@Injectable()
export class UnitService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getUnits({ page }){
    const params = new HttpParams().append('page', page);

    return this.http.get(
      environment.api.unit
    );
  }

  getUnit({ id }){
    return this.http.get(
      environment.api.unit + '/' + id
    );
  }

  addUnit({ id }){
    return this.http.post(
      environment.api.unit + '/' + id,
      {
        observe: 'response'
      }
    );
  }

  editUnit({ id }){
    return this.http.put(
      environment.api.unit + '/' + id,
      {
        observe: 'response'
      }
    );
  }

  deleteUnit({ id }){
    return this.http.delete(
      environment.api.unit + '/' + id,
      {
        observe: 'response'
      }
    );
  }

}
