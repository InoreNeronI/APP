import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { EditorConfig, UNDO_BUTTON, SEPARATOR, BOLD_BUTTON, ITALIC_BUTTON } from 'ngx-simple-text-editor';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SubjectService } from '../../../../services/subject.service';
import { UnitService } from '../../../../services/unit.service';
import { ExerciseService } from '../../../../services/exercise.service';
import Utils from '../../../../utils';

@Component({
  selector: 'app-new-item',
  templateUrl: './edit-item.component.html',
})
export class EditItemComponent implements OnInit {
  id;
  item;
  currentService;
  fields;
  data;
  htmlContent = '';

  config: EditorConfig = {
    buttons: [UNDO_BUTTON, SEPARATOR, BOLD_BUTTON, ITALIC_BUTTON],
  };

  form: UntypedFormGroup;
  formControlsArray = [];

  constructor(
    public route: ActivatedRoute,
    public subjectService: SubjectService,
    public unitService: UnitService,
    public exerciseService: ExerciseService,
    private _formBuilder: UntypedFormBuilder,
    private toastr: ToastrService,
    private translateService: TranslateService,
    private _location: Location,
  ) {
    this.form = this._formBuilder.group({
      formControlsArray: this._formBuilder.array([]),
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.item = params.get('item');
      switch (this.item) {
        case 'subjects':
          this.currentService = this.subjectService;
          break;
        case 'units':
          this.currentService = this.unitService;
          break;
        case 'exercises':
          this.currentService = this.exerciseService;
          break;
      }

      if (params.get('id')) {
        this.id = params.get('id');
      }

      this.currentService.getOne(this.id).subscribe((details) => {
        this.data = details;
        this.fields = Utils.internalFieldsFilter(Object.keys(details));

        for (let field of this.fields) {
          //create form controls dynamically:
          let formc = this._formBuilder.control(
            {
              value: this.data[field],
              disabled: field === 'id',
            },
            Validators.required,
          );

          this.formControlsArray.push(formc);
          this.form.addControl(field, formc);
        }
      });
    });
  }

  backClicked() {
    this._location.back();
  }

  submit() {
    this.currentService
      .edit(this.id, this.form.value)
      .pipe(
        catchError((err) => {
          this.toastr.error(err.error['hydra:description']);
          return throwError(err);
        }),
      )
      .subscribe(() => {
        this.toastr.success(this.translateService.instant('EDITED'));
      });
  }
}
