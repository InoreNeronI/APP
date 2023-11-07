import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectComponent } from './containers/subject/subject.component';
import { TranslateModule} from "@ngx-translate/core";
import { ExerciseComponent } from './components/exercise/exercise.component';
import { UnitComponent } from './components/unit/unit.component';


@NgModule({
  declarations: [SubjectComponent, ExerciseComponent, UnitComponent],
  imports: [CommonModule, SubjectRoutingModule, TranslateModule]
})
export class SubjectModule { }
