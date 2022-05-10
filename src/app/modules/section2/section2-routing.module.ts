import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Section2Component} from "@app-modules/section2/section2.component";

const routes: Routes = [
  {
    path: '',
    component: Section2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Section2RoutingModule { }
