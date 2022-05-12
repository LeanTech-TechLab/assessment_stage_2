import { Component, OnInit } from "@angular/core";
import { ArticleModel, ArticleResponseModel } from "@app-models/article.model";

@Component({
  selector: "app-articles",
  templateUrl: "./articles.component.html",
  styleUrls: ["./articles.component.scss"],
})
export class ArticlesComponent implements OnInit {
  articleList: ArticleModel[];
  editingArticle: ArticleModel;
  constructor() {
    this.articleList = [];
    this.editingArticle = {
      id: 0,
      title: "",
      journal: "",
      abstract: "",
      isEditing: false,
    };
  }

  ngOnInit(): void {
    this.getArticleList();
  }

  async getArticleList() {
    return await fetch("https://api.plos.org/search?q=title:DNA")
      .then((response) => response.json())
      .then((result) => {
        //docs = json.response.docs;
        this.articleList = result.response.docs.map(
          (element: ArticleResponseModel, index: number) => {
            const payload = {
              id: index,
              title: element.title_display,
              journal: element.journal,
              abstract: element.abstract[0],
              isEditing: false,
            };
            return Object.assign({}, payload);
          }
        );
      });
  }

  editArticle(id: number) {
    const index = this.articleList.findIndex(
      (element: ArticleModel) => element.id === id
    );
    this.articleList[index].isEditing = true;
    this.editingArticle = this.articleList[index];
  }

  cancelEditing(id: number) {
    const index = this.articleList.findIndex(
      (element: ArticleModel) => element.id === id
    );
    this.articleList[index].isEditing = false;
    this.editingArticle = {
      id: 0,
      title: "",
      journal: "",
      abstract: "",
      isEditing: false,
    };
  }

  addArticle(payload: ArticleModel) {
    const article = Object.assign(payload, { id: this.articleList.length });
    this.articleList.push(article);
    console.log("this.articleList", this.articleList);
  }

  deleteArticle(id: number) {
    const index = this.articleList.findIndex(
      (element: ArticleModel) => element.id === id
    );
    this.articleList.splice(index, 1);
  }
}
