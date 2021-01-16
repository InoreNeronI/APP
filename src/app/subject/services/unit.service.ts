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

  get({ page }){
    const params = new HttpParams().append('page', page);

    return this.http.get(
      environment.api.unit
    );
  }

  getOne(id){
    return this.http.get(
      environment.api.unit + '/' + id
    );
  }

  add(id){
    return this.http.post(
      environment.api.unit + '/' + id,
      {
        observe: 'response'
      }
    );
  }

  edit(id){
    return this.http.put(
      environment.api.unit + '/' + id,
      {
        observe: 'response'
      }
    );
  }

  delete(id){
    return this.http.delete(
      environment.api.unit + '/' + id,
      {
        observe: 'response'
      }
    );
  }

}
