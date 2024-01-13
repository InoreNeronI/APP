import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../../../services/subject.service';
import { UnitService } from '../../../../services/unit.service';
import { ExerciseService } from '../../../../services/exercise.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {
  //page: number = 1;

  currentTab;
  currentService;

  subjects$: Observable<any>;
  units$: Observable<any>;
  exercises$: Observable<any>;

  constructor(
    public subjectService: SubjectService,
    public unitService: UnitService,
    public exerciseService: ExerciseService,
  ) {}

  ngOnInit(): void {
    //Load all items: (prefetch all)
    this.subjects$ = this.subjectService.get(/*{page: this.page}*/);
    this.units$ = this.unitService.get(/*{page: this.page}*/);
    this.exercises$ = this.exerciseService.get(/*{page: this.page}*/);

    //Set default tab and service:
    this.currentTab = 'subjects';
    this.currentService = this.subjectService;
  }

  setCurrentNav(event) {
    this.currentTab = event.target.id;
  }

  setCurrentData() {
    switch (this.currentTab) {
      case 'subjects':
        this.currentService = this.subjectService;
        this.subjects$ = this.subjectService.get(/*{page: this.page}*/);
        break;
      case 'units':
        this.currentService = this.unitService;
        this.units$ = this.unitService.get(/*{page: this.page}*/);
        break;
      case 'exercises':
        this.currentService = this.exerciseService;
        this.exercises$ = this.exerciseService.get(/*{page: this.page}*/);
        break;
    }
  }
}
