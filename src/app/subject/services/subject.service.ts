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
      environment.api.subject
    );
  }

  getSubject({ id }){
    return this.http.get(
      environment.api.subject + '/' + id
    );
  }

  addSubject({ id }){
    return this.http.post(
      environment.api.subject + '/' + id,
      {
        observe: 'response'
      }
    );
  }

  editSubject({ id }){
    return this.http.put(
      environment.api.subject + '/' + id,
      {
        observe: 'response'
      }
    );
  }

  deleteSubject({ id }){
    return this.http.delete(
      environment.api.subject + '/' + id,
      {
        observe: 'response'
      }
    );
  }

}
