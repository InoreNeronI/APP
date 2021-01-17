import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SubjectService} from "../../../../services/subject.service";
import {UnitService} from "../../../../services/unit.service";
import {ExerciseService} from "../../../../services/exercise.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.sass']
})
export class NewItemComponent implements OnInit {

  item;
  currentService;
  fields;
  form: FormGroup;
  formControlsArray = [];

  constructor(
    public route: ActivatedRoute,
    public subjectService: SubjectService,
    public unitService: UnitService,
    public exerciseService: ExerciseService,
    private _formBuilder: FormBuilder,
    private toastr: ToastrService,
    private translateService: TranslateService
  ) {
    this.form = this._formBuilder.group({
      formControlsArray: this._formBuilder.array([])
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.item = params.get('item');
      switch (this.item) {
        case 'subjects':
          this.currentService = this.subjectService;
          this.fields = ['name', 'course'];
          break;
        case 'units':
          this.currentService = this.unitService;
          this.fields = ['title', 'text', 'subjectId'];
          break;
        case 'exercises':
          this.currentService = this.exerciseService;
          this.fields = ['title', 'question', 'answer', 'unitId'];
          break;
      }

      for(let field of this.fields){
        //create form controls dinamically:
        let formc = this._formBuilder.control('', Validators.required);

        this.formControlsArray.push(formc);
        this.form.addControl(field, formc);
      }

    });
  }

  submit(){
    const values = this.form.value;

    this.currentService.add(values).subscribe(response =>{
      console.log(response);
      this.toastr.success(this.translateService.instant('ADDED'));
    });
  }

}
