import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { UserSkillLevelsHaveWant } from '../../user-profile-shared/user-skills.service';

@Component({
  selector: 'app-topic-skill',
  templateUrl: './topic-skill.component.html',
  styleUrls: ['./topic-skill.component.sass']
})
export class TopicSkillComponent implements OnInit {

  @Input() tId: string;
  @Input() skillLevels: UserSkillLevelsHaveWant

  constructor() { }

  ngOnInit() {
  }

}
