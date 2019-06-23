import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatChipsModule,
  MatDialogModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
} from '@angular/material'
import {SkillLevelPopoverComponent} from './user-interest-configuration-dialog/skill-level-popover/skill-level-popover.component';
import {CapitalizeFirstPipe} from '../../shared/pipes/capitalize-first.pipe';
import {SkillLevelsComponent} from './user-interest-configuration-dialog/skill-levels/skill-levels.component';
import {UserInterestConfigurationDialogComponent} from './user-interest-configuration-dialog/user-interest-configuration-dialog.component';
import {BasicActionsButtonGroupComponent} from './user-interest-configuration-dialog/basic-actions-button-group/basic-actions-button-group.component';
import {SupplyDemandButtonGroupComponent} from './user-interest-configuration-dialog/supply-demand-button-group/supply-demand-button-group.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {UserConfigService} from '../../shared/user-config.service';
import { UserOtherProfileIconComponent } from './user-other-profile-icon/user-other-profile-icon.component'
import { SkillLevelsLabelComponent } from '../../skills/skills-shared/skill-levels-label/skill-levels-label.component'
import { TopicsSharedModule } from '../../topics/topics-shared/topics-shared.module'
import { UserListItemComponent } from './user-list-item/user-list-item.component'
import { RouterModule } from '@angular/router'
import { UserOtherProfilesBadgesComponent } from './user-list-item/user-other-profiles-badges/user-other-profiles-badges.component';
import { UserGeoLocationsBadgesComponent } from './user-list-item/user-geo-locations-badges/user-geo-locations-badges.component'
import { UserInterestsModeViewComponent } from './user-list-item/user-interests-mode-view/user-interests-mode-view.component'

export const exportDeclarations = [
  UserOtherProfileIconComponent,
  SkillLevelPopoverComponent,
  CapitalizeFirstPipe,
  SkillLevelsComponent,
  UserInterestConfigurationDialogComponent,
  BasicActionsButtonGroupComponent,
  SupplyDemandButtonGroupComponent,
  UserOtherProfilesBadgesComponent,
  UserGeoLocationsBadgesComponent,
  SkillLevelsLabelComponent,
  UserListItemComponent,
  UserInterestsModeViewComponent,
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatListModule,
    MatChipsModule,
    MatExpansionModule,
    FlexLayoutModule,
    TopicsSharedModule,
    RouterModule,
  ],
  declarations: [
    ...exportDeclarations,
  ],
  providers: [
    UserConfigService,
    // {
    //   provide: RouteReuseStrategy,
    //   useClass: CustomRouteReuseStrategy
    // },
  ],
  entryComponents: [
    SkillLevelPopoverComponent,
    UserInterestConfigurationDialogComponent,
  ],
  exports: [
    FlexLayoutModule,
    ...exportDeclarations,
  ],
  schemas: [
    // CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class UserProfileSharedModule { }
