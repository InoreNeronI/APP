import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SubjectService} from '../../services/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.sass']
})
export class SubjectComponent implements OnInit {

  subject;

  constructor(
    public route: ActivatedRoute,
    public subjectService: SubjectService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params)
      this.subject = params.get("subject")
    });

    this.subjectService.getSubjects({page: 1}).subscribe(data => {
      console.log(data);
    });
  }

}
