import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavorsListPageComponent } from './favors-list-page.component'

const routes: Routes = [
  {
    path: '', component: FavorsListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavorsListPageRoutingModule { }
