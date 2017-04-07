import { Component, OnInit,Input } from '@angular/core';
import { ArticleService } from '../services/article.service';
import {Article} from '../article/article';
import {ActivatedRoute,Params,Router} from '@angular/router';

import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css'],
  providers: [ArticleService]
})
export class DetailArticleComponent implements OnInit {


 article:Article;
  constructor(private service: ArticleService,private route: ActivatedRoute, private router: Router) 
  { 
}

  ngOnInit() :void {
  console.log("hello from detail");
  //  console.log('ArticleId');
this.route.params.switchMap((params:Params) => this.service.getArticle(params['_id']))
      .subscribe((article : Article)=>this.article = article);
	  console.log(this.article);
  
  }

}
