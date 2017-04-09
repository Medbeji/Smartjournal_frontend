import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent}   from '../article/article.component';
import { DetailArticleComponent }      from '../detail-article/detail-article.component';
import { ArticleByJournalComponent}   from '../article-by-journal/article-by-journal.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { AuthGuard } from '../_guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/article', pathMatch: 'full' },
  { path: 'article',  component: ArticleComponent },
  { path: 'detail/:_id', component: DetailArticleComponent },
 { path: 'article/:_id', component: ArticleByJournalComponent },


   { path: 'login', component: LoginComponent },
{ path: 'login/home', component: HomeComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
   // { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}