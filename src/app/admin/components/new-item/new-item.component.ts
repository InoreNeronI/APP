import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {ActivatedRoute} from "@angular/router";
import {SubjectService} from "../../../subject/services/subject.service";
import {UnitService} from "../../../subject/services/unit.service";
import {ExerciseService} from "../../../subject/services/exercise.service";

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

  constructor(
    public route: ActivatedRoute,
    public subjectService: SubjectService,
    public unitService: UnitService,
    public exerciseService: ExerciseService,
  ) { }

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
        this.fields = details;
      });


    });
  }

  submit(){
    console.log("submit");
  }

}
