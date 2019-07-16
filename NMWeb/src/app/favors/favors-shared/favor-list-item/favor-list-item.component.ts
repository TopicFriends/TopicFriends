import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Favor } from '../../favors-core/Favor'

@Component({
  selector: 'app-favor-list-item',
  templateUrl: './favor-list-item.component.html',
  styleUrls: ['./favor-list-item.component.sass']
})
export class FavorListItemComponent implements OnInit {

  @Input() favor: Favor

  constructor() { }

  ngOnInit() {
  }

}
