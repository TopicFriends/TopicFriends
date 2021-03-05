import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillLevelIconComponent } from './skill-level-icon/skill-level-icon.component';
import { SkillLevelsComponent } from './skill-levels/skill-levels.component'
import { SkillLevelPopoverComponent } from './skill-level-popover/skill-level-popover.component'
import { SkillLevelsLabelComponent } from './skill-levels-label/skill-levels-label.component'
import { SharedModule } from '../../shared/shared.module'
import {
  MatButtonToggleModule,
  MatDialogModule,
} from '@angular/material'
import { TopicsSharedModule } from '../../topics/topics-shared/topics-shared.module'

const exportDeclarations = [
  SkillLevelIconComponent,
  SkillLevelsComponent,
  SkillLevelsLabelComponent,
  SkillLevelPopoverComponent,
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule,
    MatButtonToggleModule,
    TopicsSharedModule,
  ],
  declarations: [
    ... exportDeclarations,
  ],
  exports: [
    ... exportDeclarations
  ],
  entryComponents: [
    SkillLevelPopoverComponent,
  ]
})
export class SkillsSharedModule { }
