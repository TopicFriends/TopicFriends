import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillLevelIconComponent } from './skill-level-icon/skill-level-icon.component';
import { SkillLevelsComponent } from '../../user-profile/user-profile-shared/user-interest-configuration-dialog/skill-levels/skill-levels.component'

const exportDeclarations = [
  SkillLevelIconComponent,
  SkillLevelsComponent
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ... exportDeclarations,
  ],
  exports: [
    ... exportDeclarations
  ],
})
export class SkillsSharedModule { }
