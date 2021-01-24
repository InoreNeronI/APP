import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './containers/admin/admin.component';
import { EditItemComponent} from './components/edit-item/edit-item.component';
import { NewItemComponent } from './components/new-item/new-item.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'new/:item', component: NewItemComponent },
  { path: 'edit/:item/:id', component: EditItemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
