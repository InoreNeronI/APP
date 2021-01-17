import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import { environment} from '../../environments/environment';

@Injectable()
export class SubjectService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  get({ page }){
    const params = new HttpParams().append('page', page);

    return this.http.get(
      environment.api.subject
    );
  }

  getOne(id: number){
    return this.http.get(
      environment.api.subject + '/' + id
    );
  }

  add(values){
    values = this.changeCourseToNumber(values);
    return this.http.post(
      environment.api.subject,
      {
        observe: 'response',
        ...values
      }
    );
  }

  edit(id: number, values){
    values = this.changeCourseToNumber(values);
    return this.http.put(
      environment.api.subject + '/' + id,
      {
        observe: 'response',
        ...values
      }
    );
  }

  delete(id: number){
    return this.http.delete(
      environment.api.subject + '/' + id,
      {
        observe: 'response'
      }
    );
  }

  private changeCourseToNumber(json){
    if(json.course){
      json.course = Number(json.course);
    }
    return json;
  }

}
