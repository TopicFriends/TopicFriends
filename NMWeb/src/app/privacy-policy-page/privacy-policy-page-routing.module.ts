import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivacyPolicyPageComponent } from './privacy-policy-page.component'

const routes: Routes = [
  {
    path: '',
    component: PrivacyPolicyPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivacyPolicyPageRoutingModule { }
