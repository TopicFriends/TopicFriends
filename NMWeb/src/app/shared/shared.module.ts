import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule, MatChipsModule,
  MatIconModule, MatInputModule,
  MatMenuModule,
  MatButtonModule, MatCheckboxModule, MatChipList, MatDialogModule,
  MatSlideToggleModule, MatSnackBar, MatSnackBarModule, MatTabsModule, MatProgressSpinnerModule, MatSelectModule, MatAutocompleteModule,
  MatListModule, MatButtonToggleModule, MatExpansionModule, MatTableModule
} from '@angular/material'
import {TopicTagComponent} from './topic-tag/topic-tag.component'
import {TopicTagListComponent} from './topic-tag-list/topic-tag-list.component'
import {UserTemplateComponent} from '../user-list/user-template/user-template.component';
import {UserInterestsModeViewComponent} from '../user-list/user-template/user-interests-mode-view/user-interests-mode-view.component';
import {SnackBarComponent} from './snackbar/snackbar.component'
import {GeoLocationService} from './geo-location.service'
import {UserGeoLocationsService} from '../user-profile-shared/user-geo-locations.service'
import {RouterModule} from '@angular/router'
import {UserDescriptionsService} from '../user-profile-shared/user-descriptions.service'
import {UserTopicsService} from './user-topics.service'
import {DistancePipe} from '../maps/users-map/distance.pipe'
import {PoiService} from './poi.service'
import {HttpClientModule} from '@angular/common/http'
import {GitHubService} from './git-hub.service'
import {StackOverflowService} from './stack-overflow.service'
import {Angular2FontawesomeModule} from 'angular2-fontawesome';
import { CleanUrlPipe } from './pipes/clean-url.pipe'
import {UserSkillsService} from '../user-profile-shared/user-skills.service'
import {UserTermsOfServiceService} from './user-terms-of-service.service'
import {MapsSharedModule} from '../maps-shared/maps-shared.module';
import { LimitToPipe } from './pipes/limit-to.pipe'
import {ItemListInputComponent} from './item-list-input/item-list-input.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {MapsModule} from '../maps/maps.module'
import {FlexLayoutModule} from '@angular/flex-layout'
import { TextAreaComponent } from './text-area/text-area.component'
import { DomainDbService } from './domain-db.service'
import { DbService } from './db.service'
import {ScrollingService} from './scrolling.service';
import {HideOnScrollDirective} from './hide-on-scroll.directive'

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
    MatAutocompleteModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    RouterModule,
    HttpClientModule,
    Angular2FontawesomeModule,
  ],
  declarations: [
    TopicTagComponent, /* FIXME: move to topics-shared[-components] */
    TopicTagListComponent,
    UserTemplateComponent,
    UserInterestsModeViewComponent,
    SnackBarComponent,
    DistancePipe,
    CleanUrlPipe,
    LimitToPipe,
    ItemListInputComponent,
    TextAreaComponent,
    HideOnScrollDirective,
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
    LimitToPipe,
    HideOnScrollDirective,
    MatTabsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    Angular2FontawesomeModule,
    ItemListInputComponent,
    TextAreaComponent,
    MatButtonModule,
  ],
  providers: [
    SnackBarComponent,
    MatSnackBar,
    GeoLocationService,
    UserGeoLocationsService,
    UserDescriptionsService,
    UserSkillsService,
    UserTermsOfServiceService,
    UserTopicsService,
    PoiService,
    GitHubService,
    StackOverflowService,
    DbService,
    DomainDbService,
    ScrollingService,

  ]

})
export class SharedModule { }
