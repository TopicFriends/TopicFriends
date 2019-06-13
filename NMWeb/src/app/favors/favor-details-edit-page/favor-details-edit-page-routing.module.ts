import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavorDetailsEditPageComponent } from './favor-details-edit-page.component'

const routes: Routes = [
  {
    path: '', component: FavorDetailsEditPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavorDetailsEditPageRoutingModule { }
