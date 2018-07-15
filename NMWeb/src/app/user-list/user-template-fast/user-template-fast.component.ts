import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { UserData } from '../../user-profile-shared/user-profile.service'
import { UserMatched } from '../../user-profile-shared/user-matcher.service'

@Component({
  selector: 'app-user-template-fast',
  templateUrl: './user-template-fast.component.html',
  styleUrls: ['./user-template-fast.component.scss']
})
export class UserTemplateFastComponent implements OnInit {

  @Input() user: UserMatched

  constructor() { }

  ngOnInit() {
  }

}
