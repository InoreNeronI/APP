import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from "./containers/admin/admin.component";
import { NewItemComponent} from "./components/new-item/new-item.component";

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: '/new', component: NewItemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
