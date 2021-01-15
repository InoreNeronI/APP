import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import { environment} from '../../../environments/environment';

@Injectable()
export class CourseService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getCourses({ page }){
    const params = new HttpParams().append('page', page);

    return this.http.get(
      environment.api.course
    );
  }

  getCourse({ id }){
    return this.http.get(
      environment.api.course + '/' + id
    );
  }

  addCourse({ id }){
    return this.http.post(
      environment.api.course + '/' + id,
      {
        observe: 'response'
      }
    );
  }

  editCourse({ id }){
    return this.http.put(
      environment.api.course + '/' + id,
      {
        observe: 'response'
      }
    );
  }

  deleteCourse({ id }){
    return this.http.delete(
      environment.api.course + '/' + id,
      {
        observe: 'response'
      }
    );
  }

}
