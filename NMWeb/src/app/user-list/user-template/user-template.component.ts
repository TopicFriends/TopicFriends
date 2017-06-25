import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserProfile, WantedTopics } from "app/user-profile/user-profile.service";

@Component({
  selector: 'nw-user-template',
  templateUrl: './user-template.component.html',
  styleUrls: ['./user-template.component.css']
})
export class UserTemplateComponent implements OnInit {

  @Input('userProfile') private _userPublicProfile: UserProfile = new UserProfile();
  @Output('onMeetPressed') onMeetPressed: EventEmitter<any> = new EventEmitter<any>();
  @Output('onSharePressed') onSharePressed: EventEmitter<any> = new EventEmitter<any>();
  
  private _whatUserWants: WantedTopics[] = [];
  constructor() { }

  ngOnInit() {
    this._whatUserWants = this._getWhatUserWants();
  }

  private _getWhatUserWants(){
    let whatUserWants: WantedTopics[] = [];
    if(this._userPublicProfile){
      let auxObjectJSON = JSON.parse(JSON.stringify(this._userPublicProfile.whatUserWants));
      let keys: string[] = Object.keys(this._userPublicProfile.whatUserWants);
      keys.forEach((key: string)=>{
        if(auxObjectJSON[key]){
          if(auxObjectJSON[key].supply.topics) whatUserWants.push(auxObjectJSON[key].supply);
          if(auxObjectJSON[key].demand.topics) whatUserWants.push(auxObjectJSON[key].demand);
        }
      });
    }

    return whatUserWants;
  }

  onMeetButtonPressed() {
    this.onMeetPressed.emit();
  }

  onShareButtonPressed() {
    this.onSharePressed.emit();
  }

}
