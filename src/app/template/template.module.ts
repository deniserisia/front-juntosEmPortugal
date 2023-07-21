import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
   // HeaderComponent
   // FooterComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule
  ],
  exports:[
    //HeaderComponent
  ]
})
export class TemplateModule { }
