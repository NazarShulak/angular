import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./components/users/users.component";
import {UserPostsComponent} from "./components/user-posts/user-posts.component";

const routes: Routes = [
  {path: '', component: UsersComponent, children: [{path: ':id', component: UserPostsComponent}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
