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
@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    NavbarComponent,
    DetailArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	AppRoutingModule
  ],
  providers: [FacebookService,ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
