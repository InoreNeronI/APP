import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import { environment} from '../../../environments/environment';

@Injectable()
export class SubjectService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getSubjects({ page }){
    const params = new HttpParams().append('page', page);

    return this.http.get(
      environment.api.exercise,
      {
        params,
        observe: 'response'
      }
    );
  }

  getSubject({ id }){
    return this.http.get(
      environment.api.exercise + '/' + id,
      {
        observe: 'response'
      }
    );
  }

  addSubject({ id }){
    return this.http.post(
      environment.api.exercise + '/' + id,
      {
        observe: 'response'
      }
    );
  }

  editSubject({ id }){
    return this.http.put(
      environment.api.exercise + '/' + id,
      {
        observe: 'response'
      }
    );
  }

  deleteSubject({ id }){
    return this.http.delete(
      environment.api.exercise + '/' + id,
      {
        observe: 'response'
      }
    );
  }

}
