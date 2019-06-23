import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicsSharedModule } from '../../topics/topics-shared/topics-shared.module'
import { SkillsModule } from '../skills.module'
import { TopicSkillComponent } from './topic-skill/topic-skill.component';
import { TopicInterestsAndSkillsListPickerComponent } from './topic-skills-list-picker/topic-skills-list-picker.component'
import { ItemListPickerModule } from '../../shared/item-list-picker/item-list-picker.module'

const exportDeclarations = [
  TopicSkillComponent,
  TopicInterestsAndSkillsListPickerComponent,
]

@NgModule({
  imports: [
    CommonModule,
    TopicsSharedModule,
    SkillsModule,
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
