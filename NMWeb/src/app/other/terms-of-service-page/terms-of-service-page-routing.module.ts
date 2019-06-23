import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TermsOfServicePageComponent } from './terms-of-service-page.component'

const routes: Routes = [
  {
    path: '',
    component: TermsOfServicePageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsOfServicePageRoutingModule { }
