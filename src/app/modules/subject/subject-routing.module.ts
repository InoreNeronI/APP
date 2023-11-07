import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectComponent } from './containers/subject/subject.component';

const routes: Routes = [
  { path: ':subject', component: SubjectComponent },
  { path: '', component: SubjectComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
