import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { SharedModule } from '../shared/shared.module'
import { AboutPage } from './about.page'
import { TopicsSharedModule } from '../topics/topics-shared/topics-shared.module'
import { MatChipsModule } from '@angular/material';
import { AboutContributorsComponent } from './about-contributors/about-contributors.component';
import { AboutPartnersComponent } from './about-partners/about-partners.component';
import { AboutFacebookComponent } from './about-facebook/about-facebook.component';
import { AboutPoweredByComponent } from './about-powered-by/about-powered-by.component';
import { AboutNewsComponent } from './about-news/about-news.component';
import { AboutContributorsWelcomeComponent } from './about-contributors-welcome/about-contributors-welcome.component';
import { AboutTwitterComponent } from './about-twitter/about-twitter.component'
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { AboutInfoComponent } from './about-info/about-info.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    TopicsSharedModule,
    MatChipsModule /* later will have a dedicated topics-list-inline component instead of relying on mat chips */,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule
  ],
  declarations: [
    AboutPage,
    AboutContributorsComponent,
    AboutPartnersComponent,
    AboutFacebookComponent,
    AboutPoweredByComponent,
    AboutNewsComponent,
    AboutContributorsWelcomeComponent,
    AboutTwitterComponent,
    AboutPartnersComponent,
    AboutInfoComponent,
  ]
})
export class AboutPageModule { }
