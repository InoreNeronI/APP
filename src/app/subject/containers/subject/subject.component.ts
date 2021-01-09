import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SubjectService} from '../../services/subject.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.sass']
})
export class SubjectComponent implements OnInit {

  subject;

  constructor(
    public route: ActivatedRoute,
    public subjectService: SubjectService,
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.subject = params.get('subject').toUpperCase();
    });

    this.subjectService.getSubjects({page: 1}).subscribe(data => {
      console.log(data);
    });
  }

}
