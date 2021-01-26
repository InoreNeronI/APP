import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './containers/admin/admin.component';
import { TableComponent } from './components/table/table.component';
import { TranslateModule} from '@ngx-translate/core';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule} from '@kolkov/angular-editor';
import { NewItemComponent } from './components/new-item/new-item.component';
import { AuthGuard } from '../auth/auth.guard';

@NgModule({
  declarations: [AdminComponent, TableComponent, EditItemComponent, NewItemComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    AngularEditorModule
  ],
  providers: [AuthGuard]
})

export class AdminModule { }
