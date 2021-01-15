import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from '../../services/subject.service';
import { TranslateService } from '@ngx-translate/core';
import {UnitService} from "../../services/unit.service";
import {ExerciseService} from "../../services/exercise.service";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.sass']
})
export class SubjectComponent implements OnInit {
  subjects;
  subjectName;
  subject;
  exercise;
  units;

  constructor(
    public route: ActivatedRoute,
    public subjectService: SubjectService,
    public unitService: UnitService,
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.subjectName = params.get('subject');

      this.subjectService.getSubjects({page: 1}).subscribe(data => {
        this.subjects = data;
        this.subject = this.subjects["hydra:member"].find(value => value.name === this.subjectName);

        console.log(this.subject)


        this.unitService.getUnits({page: 1}).subscribe(units => {
          console.log(units);
          this.units = units['hydra:member'].filter(unit => unit.subjectId.split("/")[5] == this.subject.id);

        });
      });
    });



  }
}
