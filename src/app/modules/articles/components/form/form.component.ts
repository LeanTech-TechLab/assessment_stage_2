import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ArticleModel} from "@app-models/article.model";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnChanges {
  articleTitle: string;
  articleJournal: string;
  articleAbstract: string;
  isEditing: boolean;

  @Input() editingArticle: ArticleModel;
  constructor() {
    this.editingArticle = {
      id: 0,
      title: '',
      journal: '',
      abstract: '',
      isEditing: false
    }
    this.articleTitle = '';
    this.articleJournal = '';
    this.articleAbstract = '';
    this.isEditing = false;
  }

  ngOnInit(): void {
  }

  getData() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('input cambio', changes)
    const data = changes.editingArticle.currentValue;
    if (data){
      this.articleTitle = data.title;
      this.articleJournal = data.journal;
      this.articleAbstract = data.abstract;
      this.isEditing = data.isEditing;
    }
  }

}
