import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { TestComponent } from './containers/test/test.component';
import { SubjectComponent } from './containers/subject/subject.component';
import { QuestionComponent } from './components/question/question.component';
import { AnswerComponent } from './components/answer/answer.component';
import {ExerciseService} from './services/exercise.service';
import {UnitService} from './services/unit.service';
import {SubjectService} from './services/subject.service';


@NgModule({
  declarations: [TestComponent, SubjectComponent, QuestionComponent, AnswerComponent],
  imports: [
    CommonModule,
    SubjectRoutingModule
  ],
  providers: [
    ExerciseService,
    SubjectService,
    UnitService
  ]
})
export class SubjectModule { }
