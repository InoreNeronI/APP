import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from '../../../../services/subject.service';
import { UnitService } from '../../../../services/unit.service';
import { ExerciseService } from '../../../../services/exercise.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.sass']
})
export class NewItemComponent implements OnInit {
  item;
  currentService;
  fields;
  form: UntypedFormGroup;
  formControlsArray = [];

  config: AngularEditorConfig = {
    editable: true,
    minHeight: '5rem',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [['bold']],
    customClasses: [
      {
        name: 'quote',
        class: 'quote'
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1'
      }
    ]
  };

  constructor(
    public route: ActivatedRoute,
    public subjectService: SubjectService,
    public unitService: UnitService,
    public exerciseService: ExerciseService,
    private _formBuilder: UntypedFormBuilder,
    private toastr: ToastrService,
    private translateService: TranslateService,
    private _location: Location
  ) {
    this.form = this._formBuilder.group({
      formControlsArray: this._formBuilder.array([])
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.item = params.get('item');
      switch (this.item) {
        case 'subjects':
          this.currentService = this.subjectService;
          this.fields = ['name', 'course'];
          break;
        case 'units':
          this.currentService = this.unitService;
          this.fields = ['title', 'text', 'subject'];
          break;
        case 'exercises':
          this.currentService = this.exerciseService;
          this.fields = ['title', 'question', 'answer', 'unit'];
          break;
      }

      for (let field of this.fields) {
        //create form controls dinamically:
        let formc = this._formBuilder.control('', Validators.required);

        this.formControlsArray.push(formc);
        this.form.addControl(field, formc);
      }
    });
  }

  backClicked() {
    this._location.back();
  }

  submit() {
    this.currentService
      .add(this.form.value)
      .pipe(
        catchError((err) => {
          this.toastr.error(err.error['hydra:description']);
          return throwError(err);
        })
      )
      .subscribe(() => {
        this.toastr.success(this.translateService.instant('ADDED'));
      });
  }
}
