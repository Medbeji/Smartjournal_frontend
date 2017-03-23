import { Component } from '@angular/core';
import {FacebookService, FacebookInitParams} from 'ng2-facebook-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app works!';

constructor(private fb: FacebookService) {
	let fbParams: FacebookInitParams = {
                                   appId: '251566128622296',
                                   xfbml: true,
                                   version: 'v2.8'
                                   };
    this.fb.init(fbParams);
    
    }


}
