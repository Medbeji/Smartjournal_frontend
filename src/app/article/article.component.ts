import { Component, OnInit } from '@angular/core';
import { ArticleService } from '.././services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  articles: any;


  constructor(private service: ArticleService) { 
    this.service = service;
    
  }

  ngOnInit() {
    this.getArticles();
  }
  getArticles() {
    console.log("Article from component");
    this.articles = [] ; 
    this.service.getArticles().subscribe(
      data => this.articles = data
    );
  }

}
