import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { UnitComponent } from './components/unit/unit.component';
import { SubjectComponent } from './containers/subject/subject.component';
import { SubjectRoutingModule } from './subject-routing.module';

@NgModule({
  imports: [CommonModule, SubjectRoutingModule, TranslateModule, SubjectComponent, ExerciseComponent, UnitComponent],
})
export class SubjectModule {}
