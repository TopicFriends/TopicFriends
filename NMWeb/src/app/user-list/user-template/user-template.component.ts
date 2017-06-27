import { Component, OnInit, Input } from '@angular/core';
import { UserProfile } from "app/user-profile/user-profile.service";

export class SupplyDemandTemplate{
  public static DESIRE_TYPE = {
    SUPPLY: 'supply',
    DEMAND: 'demand'
  };

  desireType: string;
  topics: string;
}

@Component({
  selector: 'nw-user-template',
  templateUrl: './user-template.component.html',
  styleUrls: ['./user-template.component.css']
})
export class UserTemplateComponent implements OnInit {

  @Input('userProfile') private _userPublicProfile: UserProfile; // = new UserProfile();

  private _whatUserWants: SupplyDemandTemplate[] = [];
  constructor() { }

  ngOnInit() {
    this._whatUserWants = this._getWhatUserWants();

  }

  private _getWhatUserWants(){
    let whatUserWants: SupplyDemandTemplate[] = [];
    if(this._userPublicProfile){
      let auxObjectJSON = JSON.parse(JSON.stringify(this._userPublicProfile.whatUserWants));
      let keys: string[] = Object.keys(this._userPublicProfile.whatUserWants);
      keys.forEach((key: string)=>{
        if(auxObjectJSON[key]){
          if(auxObjectJSON[key].supply.topics) {
            let auxSupplyDemand: SupplyDemandTemplate = new SupplyDemandTemplate();
            auxSupplyDemand.desireType = SupplyDemandTemplate.DESIRE_TYPE.SUPPLY;
            auxSupplyDemand.topics = auxObjectJSON[key].supply.topics;
            whatUserWants.push(auxSupplyDemand);
          }
          if(auxObjectJSON[key].demand.topics) {
            let auxSupplyDemand: SupplyDemandTemplate = new SupplyDemandTemplate();
            auxSupplyDemand.desireType = SupplyDemandTemplate.DESIRE_TYPE.DEMAND;
            auxSupplyDemand.topics = auxObjectJSON[key].demand.topics;
            whatUserWants.push(auxSupplyDemand);
          }
        }
      });
    }

    return whatUserWants;
  }

}
