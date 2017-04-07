import { Component, OnInit } from '@angular/core';
import { ArticleService } from '.././services/article.service';
import {Router} from '@angular/router';
import {Article} from './article';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})

export class ArticleComponent implements OnInit {

  articles: any;
  selectedArticleId: string = null;
 
 onSelect(artcle) {
        this.selectedArticleId = artcle.ArticleId;
    }
  constructor(private service: ArticleService,private route: Router) { 
    this.service = service;
    this.route = route;
  }

  ngOnInit() {
    this.getArticles();
  }
  
 // goToDetail(): void {
// 	console.log("clickkkkk");
  
// this.route.navigate(['/detail',"114547185987_10154284613010988"]);
//  }
  
  getArticles() {
    console.log("Article from component");
    this.articles = [] ; 
    this.service.getArticles().subscribe(
      data => this.articles = data
    );
  }

}
