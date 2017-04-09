import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {FacebookService, FacebookInitParams} from 'ng2-facebook-sdk';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { ArticleService } from './services/article.service';
import { NavbarService } from './services/navbar.service';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './services/user.service';
 import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { AuthGuard } from './_guards/index';
import { BaseRequestOptions } from '@angular/http';
import { AuthenticationService } from './services/authentication.service';
import { ArticleByJournalComponent } from './article-by-journal/article-by-journal.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    NavbarComponent,
    DetailArticleComponent,

    HomeComponent,
    LoginComponent,
    ArticleByJournalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	AppRoutingModule
  ],
  providers: [FacebookService,ArticleService,NavbarService,AuthenticationService, UserService,MockBackend, AuthGuard, BaseRequestOptions
  //,fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
