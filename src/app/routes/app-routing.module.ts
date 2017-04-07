import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent}   from '../article/article.component';
import { DetailArticleComponent }      from '../detail-article/detail-article.component';

const routes: Routes = [
  { path: '', redirectTo: '/article', pathMatch: 'full' },
  { path: 'article',  component: ArticleComponent },
  { path: 'detail/:_id', component: DetailArticleComponent }

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}