import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "@shared/components/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./layouts/main-layout/main-layout.module").then(
        (m) => m.MainLayoutModule
      ),
  },
  { path: "404", component: PageNotFoundComponent },
  { path: "**", redirectTo: "/404" },
];

export const Routing = RouterModule.forRoot(routes);
