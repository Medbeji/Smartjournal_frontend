import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent}   from '../article/article.component';
import { DetailArticleComponent }      from '../detail-article/detail-article.component';
import { ArticleByJournalComponent}   from '../article-by-journal/article-by-journal.component';
import { LoginComponent } from '../login/login.component';
import { AdminComponent } from '../admin/admin.component';
import { LoginFormComponent } from '../login-form/login-form.component';

import { HomeComponent } from '../home/home.component';
import { AuthGuard } from '../_guards/auth.guard';
import { ArticleByCategorieComponent}   from '../article-by-categorie/article-by-categorie.component';
const routes: Routes = [
  { path: '', redirectTo: '/article', pathMatch: 'full' },
  { path: 'article',  component: ArticleComponent },
  { path: 'article/detail/:_id', component: DetailArticleComponent },
 { path: 'article/journal/:_id', component: ArticleByJournalComponent },
 { path: 'article/categorie/:_id', component: ArticleByCategorieComponent },
 { path: 'login', component: LoginFormComponent },
 { path: 'login/admin', component: AdminComponent },
  // { path: 'login', component: LoginComponent },
  //{ path: 'login/home', component: HomeComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
   // { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}