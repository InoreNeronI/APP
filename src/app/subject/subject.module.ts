import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectComponent } from './containers/subject/subject.component';
import { ExerciseService} from './services/exercise.service';
import { UnitService} from './services/unit.service';
import { SubjectService} from './services/subject.service';
import { TranslateModule} from "@ngx-translate/core";
import { ExerciseComponent } from './components/exercise/exercise.component';
import { UnitComponent } from './components/unit/unit.component';


@NgModule({
  declarations: [ SubjectComponent, ExerciseComponent, UnitComponent],
  imports: [
    CommonModule,
    SubjectRoutingModule,
    TranslateModule
  ],
  providers: [
    ExerciseService,
    SubjectService,
    UnitService
  ]
})
export class SubjectModule { }
