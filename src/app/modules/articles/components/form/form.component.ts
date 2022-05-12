import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from "@angular/core";
import { ArticleModel } from "@app-models/article.model";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnChanges {
  articleTitle: string;
  articleJournal: string;
  articleAbstract: string;
  buttonStyle: string;
  inputType: string;
  isEditing: boolean;

  @Input() editingArticle: ArticleModel;
  @Output() addArticleEmitter = new EventEmitter<ArticleModel>();
  constructor() {
    this.editingArticle = {
      id: 0,
      title: "",
      journal: "",
      abstract: "",
      isEditing: false,
    };
    this.articleTitle = "";
    this.articleJournal = "";
    this.articleAbstract = "";
    this.isEditing = false;
    this.buttonStyle = "accent";
    this.inputType = "password";
  }

  ngOnChanges(changes: SimpleChanges): void {
    const data = changes.editingArticle.currentValue;
    if (data) {
      this.articleTitle = data.title;
      this.articleJournal = data.journal;
      this.articleAbstract = data.abstract;
      this.isEditing = data.isEditing;
    }
  }

  addArticle() {
    const payload = {
      id: 0,
      title: this.articleTitle,
      journal: this.articleJournal,
      abstract: this.articleAbstract,
      isEditing: false,
    };
    this.addArticleEmitter.emit(payload);
    this.articleTitle = "";
    this.articleJournal = "";
    this.articleAbstract = "";
  }
}
