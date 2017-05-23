import { Component, Pipe,OnInit  } from '@angular/core';
import {ActivatedRoute,Params,Router} from '@angular/router';
import {  Observable } from 'rxjs/Observable';
import { ArticleService } from '../services/article.service';
import { NavbarService } from '../services/navbar.service';
import { Journal } from '../ModelBinding/journal';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  whatTime: any;
  articles:any;
   journals:any;
   categories:any;
  logged() {
    console.log("logged");
    document.cookie = "sessionID" + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';}
    constructor(private router:Router, private articleservice:ArticleService,private navbarservice:NavbarService)
    {
      /*var x =document.cookie.split(';');
      var i =0;
      var cookieValue;
      for( ; i<x.length;i++)
      {
        if(x[i].split('=')[0].trim() =='sessionID')
        {
          cookieValue=x[i].split('=')[1];
          break;
        }
      }
      console.log(cookieValue);
      if (cookieValue ===undefined) {    this.router.navigate(['/login']); }
      else
      {var res = atob(cookieValue).split('??');
      if(atob(res[0] )=='test'&& atob(res[1])=='test' )
      {//admin

      }
      else {
        //  this.router.navigate(['/loginform']);
      }
    }
    this.whatTime = Observable.interval(1000).map(x => new Date()).share();*/


  }
  ob:any[] = ['lienfb','categorie'];
 model = new Journal( this.ob );
  ngOnInit() {
    console.log("hi admin");
    this.getArticles();
    this.getCategories();
    this.getJournaux();
  }

   getArticles() {
    console.log("Article from component Admin");
    this.articles = [] ; 
    this.articleservice.getAllArticles().subscribe(
      data => this.articles = data
    );
  }

  sleep(seconds)
  {
    var e = new Date().getTime() + (seconds * 1000);
    while (new Date().getTime() <= e) {}
  }


  getJournaux() {
    console.log("journals from component admin");
    this.journals = [] ; 
    this.navbarservice.getjournaux().subscribe(
      data => this.journals = data
    ); 
  }
  getCategories() {
    console.log("categorie from component admin");
    this.categories = [] ; 
    this.navbarservice.getCategories().subscribe(
      data => this.categories = data
    ); 
  }
  submitted = false;
  onSubmit() {        
    


              
                  
                  this.submitted = true;
                  this.navbarservice.addJournal(this.model).then(model =>{  
                   setTimeout(() => {this.router.navigate(['/login/admin']); }, 3000) ;   
                      }); 
          
  }

}
