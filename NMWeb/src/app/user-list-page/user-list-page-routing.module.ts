import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListPage } from './user-list.page'

const routes: Routes = [
  {
    path: '',
    component: UserListPage,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserListPageRoutingModule { }
