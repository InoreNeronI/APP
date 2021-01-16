import { Component, OnInit } from '@angular/core';
import {SubjectService} from "../../../subject/services/subject.service";
import {UnitService} from "../../../subject/services/unit.service";
import {ExerciseService} from "../../../subject/services/exercise.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  page = 1;

  currentTab;
  data$;

  lessons$ : Observable<any>;
  units$ : Observable<any>;
  exercises$ : Observable<any>;

  constructor(
    public subjectService: SubjectService,
    public unitService: UnitService,
    public exerciseService: ExerciseService
  ) { }

  ngOnInit(): void {

    //Load items:
    this.lessons$ = this.subjectService.getSubjects({page: this.page});
    this.units$ = this.unitService.getUnits({page: this.page});
    this.exercises$ = this.exerciseService.getExercises({page: this.page});

    //set default data:
    this.setTableData('lessons');
  }

  setCurrentNav(event){
    this.currentTab = event.srcElement.id;
  }

  setTableData(element){
    switch (element){
      case 'lessons':
        this.data$ = this.lessons$;
        break;
      case 'units':
        this.data$ = this.units$;
        break;
      case 'exercises':
        this.data$ = this.exercises$;
        break;
    }
  }

}
