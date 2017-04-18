import { Component, OnInit, AfterViewInit} from '@angular/core';
import { ArticleService } from '../services/article.service';
import {ActivatedRoute,Params,Router} from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-article-by-journal',
  templateUrl: './article-by-journal.component.html',
  styleUrls: ['./article-by-journal.component.css']
})
export class ArticleByJournalComponent implements OnInit {
  articles:any;
  constructor(private service: ArticleService,private route: ActivatedRoute, private router: Router)
  {

  }
  ngOnInit()  {
    this.getArticles();
  }
  getArticles() {
    console.log("Article from component ArticleByjournal");
    this.articles = [] ;


    this.route.params.switchMap((params:Params) => this.service.getArticleByJournal(params['_id']))
    .subscribe(data => this.articles = data);
    console.log(this.articles );
  }

  ngAfterViewInit() {
    // Your jQuery code goes here
   $(document).ready(function() {
        $('#blog-landing').pinterest_grid({
          no_columns: 4,
          padding_x: 10,
          padding_y: 10,
          margin_bottom: 50,
          single_column_breakpoint: 700
        });

      });

  }


}
