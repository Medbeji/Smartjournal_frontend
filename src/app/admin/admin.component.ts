import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params,Router} from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {



 logged() {        console.log("logged");
   document.cookie = "sessionID" + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';}
  constructor(private router:Router) 
  {
     var x =document.cookie.split(';');
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
  }

  ngOnInit() {
    console.log("hi admin");
  }

}
