import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatSnackBar,
  MatSnackBarModule,
  MatTableModule,
  MatTabsModule,
} from '@angular/material'
import { SnackBarComponent } from './snackbar/snackbar.component'
import { GeoLocationService } from './geo-location.service'
import { RouterModule } from '@angular/router'
import { DistancePipe } from '../maps/users-map-page/distance.pipe'
import { PoiService } from './poi.service'
import { HttpClientModule } from '@angular/common/http'
import { GitHubService } from './git-hub.service'
import { StackOverflowService } from './stack-overflow.service'
import { Angular2FontawesomeModule } from 'angular2-fontawesome';
import { CleanUrlPipe } from './pipes/clean-url.pipe'
import { UserTermsOfServiceService } from './user-terms-of-service.service'
import { LimitToPipe } from './pipes/limit-to.pipe'
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms'
import { TextAreaComponent } from './text-area/text-area.component'
import { DomainDbService } from './domain-db.service'
import { DbService } from './db.service'
import { ScrollingService } from './scrolling.service';
import { HideOnScrollDirective } from './hide-on-scroll.directive';
import { CapitalizeFirstPipe } from './pipes/capitalize-first.pipe'

export const exportModules = [
  MatChipsModule,
  RouterModule,
]

const exportDeclarations = [
  CapitalizeFirstPipe,
]

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatInputModule,
    MatMenuModule,
    MatCheckboxModule,
    MatIconModule,
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
    HttpClientModule,
    Angular2FontawesomeModule,
    ...exportModules,
  ],
  declarations: [
    ... exportDeclarations,
    SnackBarComponent,
    DistancePipe,
    CleanUrlPipe,
    LimitToPipe,
    TextAreaComponent,
    HideOnScrollDirective,
    // GeolocationService,
  ],
  exports: [
    SnackBarComponent,
    MatInputModule,
    DistancePipe,
    LimitToPipe,
    HideOnScrollDirective,
    MatTabsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    Angular2FontawesomeModule,
    TextAreaComponent,
    MatButtonModule,
    ... exportModules,
    ... exportDeclarations,
  ],
  providers: [
    SnackBarComponent,
    MatSnackBar,
    GeoLocationService,
    UserTermsOfServiceService,
    PoiService,
    GitHubService,
    StackOverflowService,
    DbService,
    DomainDbService,
    ScrollingService,
  ]
})
export class SharedModule { }
