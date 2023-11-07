import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './containers/admin/admin.component';
import { EditItemComponent} from './components/edit-item/edit-item.component';
import { NewItemComponent } from './components/new-item/new-item.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  { path: '', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'new/:item', component: NewItemComponent, canActivate: [AuthGuard] },
  { path: 'edit/:item/:id', component: EditItemComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
