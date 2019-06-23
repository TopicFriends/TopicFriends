import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicsSharedModule } from '../../topics/topics-shared/topics-shared.module'
import { SkillsModule } from '../skills.module'
import { TopicSkillComponent } from './topic-skill/topic-skill.component'

const exportDeclarations = [
  TopicSkillComponent,
]

@NgModule({
  imports: [
    CommonModule,
    TopicsSharedModule,
    SkillsModule,
  ],
  declarations: [
    ...exportDeclarations,
  ],
  exports: [
    ...exportDeclarations,
  ]
})
export class TopicSkillsSharedModule { }
