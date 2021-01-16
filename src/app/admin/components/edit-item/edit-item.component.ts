import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {ActivatedRoute} from "@angular/router";
import {SubjectService} from "../../../subject/services/subject.service";
import {UnitService} from "../../../subject/services/unit.service";
import {ExerciseService} from "../../../subject/services/exercise.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.sass']
})
export class NewItemComponent implements OnInit {

  id;
  item;
  currentService;
  fields;
  data;
  htmlContent = '';

  config: AngularEditorConfig = {
    editable: true,
    minHeight: '5rem',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
    ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

  form: FormGroup;
  formControlsArray = [];

  constructor(
    public route: ActivatedRoute,
    public subjectService: SubjectService,
    public unitService: UnitService,
    public exerciseService: ExerciseService,
    private _formBuilder: FormBuilder
  ) {
    this.form = this._formBuilder.group({
      formControlsArray: this._formBuilder.array([])
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.item = params.get('item');
      switch (this.item){
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

      if(params.get('id')) {
        this.id = params.get('id');
      }

      this.currentService.getOne(this.id).subscribe(details => {
        this.data = details;
        this.fields = this.internalFieldsfilter(Object.keys(details));

        for(let field of this.fields){
          //create form controls dinamically:
          let formc = this._formBuilder.control(
            {
              value: this.data[field],
              disabled: field === 'id'
            }, Validators.required);

          this.formControlsArray.push(formc);
          this.form.addControl(field, formc);
        }
        console.log(this.fields)
        console.log(this.formControlsArray)
      });


    });
  }

  internalFieldsfilter(array){
    const fieldsToRemoveFromResponse = ["@id", "@type", "@context"];
    return array.filter(value => fieldsToRemoveFromResponse.indexOf(value) < 0)
  }

  submit(){
    console.log("submit");

    //edit test:
    const values = this.form.value;
    console.log(values)

    this.currentService.edit(this.id, values).subscribe(response =>{
      console.log(response);
    });

  }

}
