import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainLayoutComponent } from "./main-layout.component";

const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "articles",
      },
      {
        path: "articles",
        pathMatch: "full",
        loadChildren: () =>
          import("../../modules/articles/articles.module").then(
            (m) => m.ArticlesModule
          ),
      },
      {
        path: "section-2",
        pathMatch: "full",
        loadChildren: () =>
          import("../../modules/section2/section2.module").then(
            (m) => m.Section2Module
          ),
      },
      {
        path: "section-3",
        pathMatch: "full",
        loadChildren: () =>
          import("../../modules/section3/section3.module").then(
            (m) => m.Section3Module
          ),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
