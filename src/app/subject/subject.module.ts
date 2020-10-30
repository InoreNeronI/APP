import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { TestComponent } from './containers/test/test.component';
import { SubjectComponent } from './containers/subject/subject.component';
import { QuestionComponent } from './components/question/question.component';
import { AnswerComponent } from './components/answer/answer.component';


@NgModule({
  declarations: [TestComponent, SubjectComponent, QuestionComponent, AnswerComponent],
  imports: [
    CommonModule,
    SubjectRoutingModule
  ]
})
export class SubjectModule { }
