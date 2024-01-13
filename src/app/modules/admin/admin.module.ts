import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './containers/admin/admin.component';
import { TableComponent } from './components/table/table.component';
import { TranslateModule } from '@ngx-translate/core';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewItemComponent } from './components/new-item/new-item.component';
import { AuthGuard } from '../auth/auth.guard';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';

@NgModule({
  declarations: [AdminComponent, TableComponent, EditItemComponent, NewItemComponent],
  imports: [CommonModule, AdminRoutingModule, TranslateModule, FormsModule, ReactiveFormsModule, RichTextEditorModule],
  providers: [AuthGuard],
})
export class AdminModule {}
