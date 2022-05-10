import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Section2RoutingModule } from './section2-routing.module';
import { Section2Component } from './section2.component';


@NgModule({
  declarations: [
    Section2Component
  ],
  imports: [
    CommonModule,
    Section2RoutingModule
  ]
})
export class Section2Module { }
