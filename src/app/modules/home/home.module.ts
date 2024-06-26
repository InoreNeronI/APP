import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './containers/home/home.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, TranslateModule, HomeComponent],
})
export class HomeModule {}
