import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class ArticleService {
  endpoint_url:string="http://smartjournal.herokuapp.com/api/article";

  constructor(private http:Http) {
    this.http = http
   }
    
  getArticles(){
    console.log("Message from service");
    return this.http.get(this.endpoint_url).map(res => res.json());
  }

}
