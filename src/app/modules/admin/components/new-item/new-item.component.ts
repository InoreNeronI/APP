import { Component, OnInit } from '@angular/core';
import { Location, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { BOLD_BUTTON, EditorConfig, ITALIC_BUTTON, SEPARATOR, UNDO_BUTTON, NgxSimpleTextEditorModule } from 'ngx-simple-text-editor';
import { SubjectService } from '../../../../services/subject.service';
import { UnitService } from '../../../../services/unit.service';
import { ExerciseService } from '../../../../services/exercise.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgFor, NgIf, NgxSimpleTextEditorModule, TranslateModule],
})
export class NewItemComponent implements OnInit {
  item: string;
  currentService: SubjectService | UnitService | ExerciseService;
  fields: string[];
  form: UntypedFormGroup;
  formControlsArray = [];

  config: EditorConfig = {
    buttons: [UNDO_BUTTON, SEPARATOR, BOLD_BUTTON, ITALIC_BUTTON],
  };

  constructor(
    public route: ActivatedRoute,
    public subjectService: SubjectService,
    public unitService: UnitService,
    public exerciseService: ExerciseService,
    private _formBuilder: UntypedFormBuilder,
    private toaster: ToastrService,
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
        //create form controls dynamically:
        let form = this._formBuilder.control('', Validators.required);

        this.formControlsArray.push(form);
        this.form.addControl(field, form);
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
          this.toaster.error(err.error['hydra:description']);
          return throwError(err);
        }),
      )
      .subscribe(() => {
        this.toaster.success(this.translateService.instant('ADDED'));
      });
  }
}
