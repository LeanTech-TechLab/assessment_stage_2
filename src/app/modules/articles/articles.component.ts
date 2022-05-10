import { Component, OnInit } from '@angular/core';
import {ArticleModel, ArticleResponseModel} from "@app-models/article.model";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articleList: ArticleModel[];
  editingArticle: ArticleModel;
  constructor() {
    this.articleList = [];
    this.editingArticle = {
      id: 0,
      title: '',
      journal: '',
      abstract: '',
      isEditing: false
    }
  }

  ngOnInit(): void {
    console.log('this.editingArticle', this.editingArticle);
    this.getArticleList();
  }

  async getArticleList() {
    return await fetch('https://api.plos.org/search?q=title:DNA')
      .then((response) => response.json())
      .then((result) => {
        //docs = json.response.docs;
        this.articleList = result.response.docs.map((element: ArticleResponseModel, index: number) => {
          const payload = {
            id: index,
            title: element.title_display,
            journal: element.journal,
            abstract: element.abstract[0],
            isEditing: false
          }
          return Object.assign({}, payload);
        })
        console.log('json', result);
        console.log('articleList', this.articleList);
      });
  }

  editArticle(id: number) {
    console.log('id', id);
    const index = this.articleList.findIndex((element) => element.id === id);
    this.articleList[index].isEditing = true;
    this.editingArticle = this.articleList[index];
  }

}
