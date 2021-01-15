import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './containers/admin/admin.component';
import { TableComponent } from './components/table/table.component';
import { TranslateModule} from "@ngx-translate/core";
import { NewItemComponent } from './components/new-item/new-item.component';
import {FormsModule} from "@angular/forms";
import {AngularEditorModule} from "@kolkov/angular-editor";


@NgModule({
  declarations: [AdminComponent, TableComponent, NewItemComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TranslateModule,
    FormsModule,
    AngularEditorModule
  ]
})
export class AdminModule { }
