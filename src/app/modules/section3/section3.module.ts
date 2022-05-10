import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Section3RoutingModule } from './section3-routing.module';
import { Section3Component } from './section3.component';


@NgModule({
  declarations: [
    Section3Component
  ],
  imports: [
    CommonModule,
    Section3RoutingModule
  ]
})
export class Section3Module { }
