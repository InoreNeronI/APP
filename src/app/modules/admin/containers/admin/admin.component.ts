import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../../../services/subject.service';
import { UnitService } from '../../../../services/unit.service';
import { ExerciseService } from '../../../../services/exercise.service';
import { Observable } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import { AsyncPipe } from '@angular/common';
import { TableComponent } from '../../components/table/table.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  standalone: true,
  imports: [RouterLink, TableComponent, AsyncPipe, TranslateModule],
})
export class AdminComponent implements OnInit {
  //page: number = 1;

  currentTab: string;
  currentService: SubjectService | UnitService | ExerciseService;

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

  setCurrentNav(event: Event | any): void {
    this.currentTab = event.target.id;
  }

  setCurrentData(): void {
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
