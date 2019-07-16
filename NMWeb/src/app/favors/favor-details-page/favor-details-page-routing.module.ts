import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavorDetailsPageComponent } from './favor-details-page.component'

const routes: Routes = [
  {
    path: '', component: FavorDetailsPageComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavorDetailsPageRoutingModule { }
