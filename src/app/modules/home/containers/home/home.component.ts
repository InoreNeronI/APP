import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Particles } from '../../../../particles';
import { SubjectService } from '../../../../services/subject.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent extends Particles implements OnInit {
  subjects;

  constructor(
    public subjectService: SubjectService,
    public translate: TranslateService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.subjectService.get(/*{page: this.page}*/).subscribe((subjects) => {
      this.subjects = subjects;
    });
    this.drawParticles();
  }
}
