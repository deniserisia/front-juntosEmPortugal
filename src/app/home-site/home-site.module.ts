import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeSiteRoutingModule } from './home-site-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeSiteRoutingModule
  ]
})
export class HomeSiteModule { }
