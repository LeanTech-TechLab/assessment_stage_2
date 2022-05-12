import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ArticlesRoutingModule } from "./articles-routing.module";
import { ArticlesComponent } from "./articles.component";
import { FormComponent } from "./components/form/form.component";
import { CardComponent } from "./components/card/card.component";
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
} from "@shared/angular-material/index";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [ArticlesComponent, FormComponent, CardComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
  ],
})
export class ArticlesModule {}
