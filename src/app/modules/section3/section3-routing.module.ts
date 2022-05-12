import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Section3Component } from "@app-modules/section3/section3.component";

const routes: Routes = [
  {
    path: "",
    component: Section3Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Section3RoutingModule {}
