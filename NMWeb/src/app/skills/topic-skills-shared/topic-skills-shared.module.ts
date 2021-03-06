import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicsSharedModule } from '../../topics/topics-shared/topics-shared.module'
import { TopicSkillComponent } from './topic-skill/topic-skill.component';
import { TopicInterestsAndSkillsListPickerComponent } from './topic-skills-list-picker/topic-skills-list-picker.component'
import { ItemListPickerModule } from '../../shared/item-list-picker/item-list-picker.module'
import { SkillsSharedModule } from '../skills-shared/skills-shared.module'

const exportDeclarations = [
  TopicSkillComponent,
  TopicInterestsAndSkillsListPickerComponent,
]

@NgModule({
  imports: [
    CommonModule,
    TopicsSharedModule,
    SkillsSharedModule,
    ItemListPickerModule,
  ],
  declarations: [
    ...exportDeclarations,
  ],
  exports: [
    ...exportDeclarations,
  ]
})
export class TopicSkillsSharedModule { }
