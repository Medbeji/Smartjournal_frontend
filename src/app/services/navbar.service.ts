import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/Rx'
import 'rxjs/add/operator/toPromise';;
import {Article} from '../ModelBinding/article';
import {Journal} from '../ModelBinding/journal';

@Injectable()
export class NavbarService {
  endpoint_url:string="http://smartjournal.herokuapp.com/api/categorie";

  constructor(private http:Http) {
    this.http = http
   }

journal_url:string="http://smartjournal.herokuapp.com/api/journal";
private header = new Headers({'Content-Type': 'application/json'});
      addJournal (body: Object): Promise<Journal> {
        return  this.http
              .post(this.journal_url, JSON.stringify(body), {headers:this.header})
              .toPromise()
              .then(res => res.json().data)
              .catch(this.handleError);}


    private handleError(error: any): Promise<any>
{
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}
  getjournaux()
  {
    console.log("Message from categorie service");
    return this.http.get(this.journal_url).map(res => res.json());
  }

  getCategories()
  {
    console.log("Message from categorie service");
    return this.http.get(this.endpoint_url).map(res => res.json());
  }
}
