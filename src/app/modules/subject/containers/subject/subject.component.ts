import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from '../../../../services/subject.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { UnitService } from '../../../../services/unit.service';
import { UnitComponent } from '../../components/unit/unit.component';
import { NgIf, NgFor, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  standalone: true,
  imports: [NgIf, NgFor, UnitComponent, UpperCasePipe, TranslateModule],
})
export class SubjectComponent implements OnInit {
  subjects: Object;
  subjectName: string;
  subject: any;
  exercise: any;
  units: any;

  constructor(
    public route: ActivatedRoute,
    public subjectService: SubjectService,
    public unitService: UnitService,
    public translate: TranslateService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params): void => {
      this.subjectName = params.get('subject');

      this.subjectService.get(/*{page: 1}*/).subscribe((data): void => {
        this.subjects = data;
        this.subject = this.subjects['hydra:member'].find((value: any): boolean => value.name === this.subjectName);

        this.unitService.get(/*{page: 1}*/).subscribe((units): void => {
          this.units = units['hydra:member'].filter((unit: any): boolean => unit.subject.split('/')[3] === this.subject.id.toString());
        });
      });
    });
  }
}
