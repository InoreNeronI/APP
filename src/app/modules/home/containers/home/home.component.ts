import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { SubjectService } from '../../../../services/subject.service';
import { RouterLink } from '@angular/router';
import { NgIf, NgFor, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink, UpperCasePipe, TranslateModule],
})
export class HomeComponent implements OnInit {
  subjects: Object;

  constructor(
    public subjectService: SubjectService,
    public translate: TranslateService,
  ) {}

  ngOnInit(): void {
    this.subjectService.get(/*{page: this.page}*/).subscribe((subjects) => {
      this.subjects = subjects;
    });
  }
}
