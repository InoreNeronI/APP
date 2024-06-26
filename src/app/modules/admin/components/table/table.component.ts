import { Component, Input } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { RouterLink } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass'],
  standalone: true,
  imports: [NgIf, NgFor, RouterLink, TranslateModule],
})
export class TableComponent {
  @Input() data: Object;
  @Input() currentType: string;
  fields: any;

  constructor(
    private http: HttpClient,
    private toaster: ToastrService,
    private translateService: TranslateService,
  ) {}

  getArrayDataFromJSON(json) {
    let data = [];
    for (let field of this.fields) {
      data.push(json[field]);
    }
    return data;
  }

  getArrayFieldsFromJSON(json = []) {
    this.fields = this.internalFieldsFilter(Object.keys(json));

    return this.fields;
  }

  internalFieldsFilter(array: any[]) {
    const fieldsToRemoveFromResponse = ['@id', '@type'];

    return array.filter((value) => fieldsToRemoveFromResponse.indexOf(value) < 0);
  }

  deleteByID(id: number) {
    return this.http
      .delete(environment.apiUrl + '/' + this.currentType + '/' + id, { observe: 'response' })
      .pipe(
        catchError((err) => {
          this.toaster.error(err.error.error);
          return throwError(err);
        }),
      )
      .subscribe(() => {
        this.toaster.success(this.translateService.instant('DELETED'));
        const deleted = this.data['hydra:member'].find((x) => x.id === id);
        this.data['hydra:member'].splice(this.data['hydra:member'].indexOf(deleted), 1);
        this.data['hydra:totalItems'] -= 1;
      });
  }
}
