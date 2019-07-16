import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './favors-list-page/favors-list-page.module#FavorsListPageModule'
  },
  {
    path: ':favorId/edit',
    loadChildren: './favor-details-edit-page/favor-details-edit-page.module#FavorDetailsEditPageModule'
  },
  {
    path: ':favorId',
    loadChildren: './favor-details-page/favor-details-page.module#FavorDetailsPageModule'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavorsRoutingModule { }
