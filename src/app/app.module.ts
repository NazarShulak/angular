import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './components/app/app.component';
import {HttpClientModule} from "@angular/common/http";
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {RouterModule, Routes} from "@angular/router";
import {UserResolver} from "./modules/user/services/user.resolver";
import {PostResolver} from "./modules/post/services/post.resolver";

let roots: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule),
    resolve: {data: UserResolver}
  },
  {
    path: 'posts',
    loadChildren: () => import('./modules/post/post.module').then(m => m.PostModule),
    resolve: {data: PostResolver}
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(roots)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
