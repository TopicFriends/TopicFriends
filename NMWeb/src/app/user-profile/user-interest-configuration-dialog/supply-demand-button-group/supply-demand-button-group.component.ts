import { Component, OnInit, Input } from '@angular/core';

interface supplyDemandAction {
  title: string,
  actions: string[]
};

@Component({
  selector: 'app-supply-demand-button-group',
  templateUrl: './supply-demand-button-group.component.html',
  styleUrls: ['./supply-demand-button-group.component.scss']
})

export class SupplyDemandButtonGroupComponent implements OnInit {

  @Input() public data:supplyDemandAction;

  constructor() { }

  ngOnInit() {
  }

}
