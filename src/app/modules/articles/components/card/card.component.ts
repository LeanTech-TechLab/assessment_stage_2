import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ArticleModel} from "@app-models/article.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() article: ArticleModel;
  @Output() editArticleEmitter = new EventEmitter<number>();
  constructor() {
    this.article = {
      id: 0,
      title: '',
      journal: '',
      abstract: '',
      isEditing: false
    }
  }

  ngOnInit(): void {
  }

  getImageSource() {
    return this.article.journal.toLowerCase().includes('plos one') ? 'assets/image/plos-one.png' : 'assets/image/not_found.png';
  }

  editArticle() {
    this.editArticleEmitter.emit(this.article.id);
  }
}
