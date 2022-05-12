import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ArticleModel } from "@app-models/article.model";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
  animations: [
    trigger("showHide", [
      state(
        "show",
        style({
          transform: "translateY(0)",
          opacity: 1,
          flex: "100",
        })
      ),
      state(
        "hide",
        style({
          transform: "translateY(-100%)",
          opacity: 0,
        })
      ),
      transition("* => *", [animate("1s")]),
    ]),
  ],
})
export class CardComponent {
  isShowingAbstract: boolean;
  @Input() article: ArticleModel;
  @Output() editArticleEmitter = new EventEmitter<number>();
  @Output() cancelEditingEmitter = new EventEmitter<number>();
  @Output() deleteArticleEmitter = new EventEmitter<number>();
  constructor() {
    this.article = {
      id: 0,
      title: "",
      journal: "",
      abstract: "",
      isEditing: false,
    };
    this.isShowingAbstract = true;
  }

  getImageSource() {
    return this.article.journal.toLowerCase().includes("plos one")
      ? "assets/image/plos-one.png"
      : "assets/image/not_found.png";
  }

  editArticle() {
    this.editArticleEmitter.emit(this.article.id);
  }

  cancelEdit() {
    this.cancelEditingEmitter.emit(this.article.id);
  }

  deleteArticle() {
    this.deleteArticleEmitter.emit(this.article.id);
  }

  showAbstract() {
    this.isShowingAbstract = !this.isShowingAbstract;
  }
}
