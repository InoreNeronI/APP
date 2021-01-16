import { Component, OnInit } from '@angular/core';
import {SubjectService} from "../../../subject/services/subject.service";
import {UnitService} from "../../../subject/services/unit.service";
import {ExerciseService} from "../../../subject/services/exercise.service";
import {Observable} from "rxjs";
import {ToastrService} from "ngx-toastr";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  page = 1;

  currentTab;
  currentService;

  subjects$ : Observable<any>;
  units$ : Observable<any>;
  exercises$ : Observable<any>;

  constructor(
    public subjectService: SubjectService,
    public unitService: UnitService,
    public exerciseService: ExerciseService,
    private toastr: ToastrService,
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {

    //Load all items: (prefetch all)
    this.subjects$ = this.subjectService.get({page: this.page});
    this.units$ = this.unitService.get({page: this.page});
    this.exercises$ = this.exerciseService.get({page: this.page});

    //Set default tab and service:
    this.currentTab = 'subjects';
    this.currentService = this.subjectService;
  }

  setCurrentNav(event){
    this.currentTab = event.srcElement.id;
  }

  delete(id: number){
    this.currentService.delete(id).subscribe(response => {
      this.setCurrentData();
      this.toastr.success(this.translateService.instant('DELETED'));
    });
  }

  setCurrentData(){
    switch (this.currentTab){
      case 'subjects':
        this.currentService = this.subjectService;
        this.subjects$ = this.subjectService.get({page: this.page});
        break;
      case 'units':
        this.currentService = this.unitService;
        this.units$ = this.unitService.get({page: this.page});
        break;
      case 'exercises':
        this.currentService = this.exerciseService;
        this.exercises$ = this.exerciseService.get({page: this.page});
        break;
    }
  }



}
