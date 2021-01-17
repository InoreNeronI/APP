import { Component, OnInit } from '@angular/core';
import {SubjectService} from "../../../../services/subject.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  subjects;
  page: number = 1;

  constructor(
    public subjectService: SubjectService,
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.subjectService.get({page: this.page}).subscribe( subjects => {
      console.log(subjects)
      this.subjects = subjects;
    })
  }

}
