import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class UnitService {
  constructor(private http: HttpClient) {}

  get(/*{ page }*/) {
    return this.http.get(environment.api.unit);
  }

  getOne(id: number) {
    return this.http.get(environment.api.unit + '/' + id);
  }

  add(values) {
    values.subject = environment.api.subject + '/' + values.subject;
    return this.http.post(environment.api.unit, {
      observe: 'response',
      ...values
    });
  }

  edit(id: number, values) {
    return this.http.put(environment.api.unit + '/' + id, {
      observe: 'response',
      ...values
    });
  } /*

  delete(id: number) {
    return this.http.delete(
      environment.api.unit + '/' + id,
      {
        observe: 'response'
      }
    );
  }*/
}
