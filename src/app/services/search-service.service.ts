import { Injectable } from '@angular/core';
import { Http }  from '@angular/http';
import 'rxjs/Rx'
import 'rxjs/add/operator/toPromise';;
import {Article} from '../ModelBinding/article';

@Injectable()
export class SearchService {

  searchUrl:string = "http://smartjournal.herokuapp.com/api/article" ; 


 constructor(private http:Http) {
    this.http = http
  }

  findByKeywords(keyword: string){
    return this.http.get(this.searchUrl).map(res => res.json());
  }

}
