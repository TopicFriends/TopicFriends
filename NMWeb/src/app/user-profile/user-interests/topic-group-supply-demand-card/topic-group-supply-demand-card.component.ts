import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms'

@Component({
  selector: 'app-topic-group-supply-demand-card',
  templateUrl: './topic-group-supply-demand-card.component.html',
  styleUrls: ['./topic-group-supply-demand-card.component.scss']
})
export class TopicGroupSupplyDemandCardComponent implements OnInit {

  @Input() parentFormGroup: FormGroup
  @Input() nestedFormGroupName: string

  constructor() { }

  ngOnInit() {
  }

}
