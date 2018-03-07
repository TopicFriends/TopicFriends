import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule, MatChipsModule,
  MatIconModule, MatInputModule,
  MatMenuModule,
  MatButtonModule, MatCheckboxModule, MatChipList, MatDialogModule,
  MatSlideToggleModule, MatSnackBar, MatSnackBarModule, MatTabsModule, MatProgressSpinnerModule, MatSelectModule,
} from '@angular/material'
import {TopicTagComponent} from './topic-tag/topic-tag.component'
import {TopicTagListComponent} from './topic-tag-list/topic-tag-list.component'
import {UserTemplateComponent} from '../user-list/user-template/user-template.component';
import {UserInterestsModeViewComponent} from '../user-list/user-template/user-interests-mode-view/user-interests-mode-view.component';
import {SnackBarComponent} from './snackbar/snackbar.component'
import {GeoLocationService} from './geo-location.service'
import {UserGeoLocationsService} from './user-geo-locations.service'
import {RouterModule} from '@angular/router'
import {UserDescriptionsService} from './user-profile/user-descriptions.service'
import {UserTopicsService} from './user-topics.service'
import {DistancePipe} from '../maps/users-map/distance.pipe'
import {PoiService} from './poi.service'
import {HttpClientModule} from '@angular/common/http'
import {GitHubService} from './git-hub.service'
import {StackOverflowService} from './stack-overflow.service'
import {Angular2FontawesomeModule} from 'angular2-fontawesome';
import { CleanUrlPipe } from './pipes/clean-url.pipe'
import {UserSkillsService} from './user-skills.service'
import {UserTermsOfServiceService} from './user-terms-of-service.service'
import {MapsSharedModule} from '../maps-shared/maps-shared.module';
import { LimitToPipe } from './pipes/limit-to.pipe'

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatInputModule,
    MatMenuModule,
    MatCheckboxModule,
    MatIconModule,
    MatChipsModule,
    MatTabsModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    RouterModule,
    HttpClientModule,
    Angular2FontawesomeModule,
  ],
  declarations: [
    TopicTagComponent,
    TopicTagListComponent,
    UserTemplateComponent,
    UserInterestsModeViewComponent,
    SnackBarComponent,
    DistancePipe,
    CleanUrlPipe,
    LimitToPipe,
    // GeolocationService,
  ],
  exports: [
    TopicTagComponent,
    TopicTagListComponent,
    UserTemplateComponent,
    UserInterestsModeViewComponent,
    SnackBarComponent,
    MatInputModule,
    DistancePipe,
    MatTabsModule,
    MatProgressSpinnerModule,
    Angular2FontawesomeModule,
  ],
  providers: [
    SnackBarComponent,
    MatSnackBar,
    MatButtonModule,
    GeoLocationService,
    UserGeoLocationsService,
    UserDescriptionsService,
    UserSkillsService,
    UserTermsOfServiceService,
    UserTopicsService,
    PoiService,
    GitHubService,
    StackOverflowService,
  ]

})
export class SharedModule { }
