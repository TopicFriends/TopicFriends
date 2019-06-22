import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersMapPageComponent } from './users-map-page.component'

const routes: Routes = [
  {
    path: '',
    component: UsersMapPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersMapPageRoutingModule { }
