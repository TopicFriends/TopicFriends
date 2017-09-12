import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'
import {AuthService} from '../auth.service'
import {GeoLocation, GeoLocations, UserGeoLocations, UserProfileService} from '../user-profile.service'

function transformIntoLocationDictionaries(values: any) {
  let returnVal = {}

  for (let keyName of Object.keys(values)) {
    const geoString = values[keyName]

    const parsedGeoLocation: GeoLocation = geoString
    returnVal[keyName] = [ parsedGeoLocation ]
    // later we might have more geoLocations of a given type (e.g. study/work in multiple places)
  }
  return returnVal
}

export function geoLocationToString(g: GeoLocation) {
  if ( ! g ) {
    return ''
  }
  return g.latitude + ', ' + g.longitude
}

const formDefinition = {
  whereILive: '',
  whereIWork: '',
  whereIStudy: '',
  whereIVisit: '',
  homeTown: '',
}

@Component({
  selector: 'app-user-geo-locations',
  templateUrl: './user-geo-locations.component.html',
  styleUrls: ['./user-geo-locations.component.scss'],
})
export class UserGeoLocationsComponent implements OnInit {

  @Input() public parentFormGroup: FormGroup;
  public geoLocationsFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userProfileService: UserProfileService,
  ) {
  }

  ngOnInit() {
    console.log('UserGeoLocationsComponent: parentFormGroup', this.parentFormGroup)
    this.authService.user.subscribe(user => {
      this.userProfileService.getUserGeoLocations().subscribe(
          (geoLocationsFromDb: UserGeoLocations) => {
        this.applyFromDb(geoLocationsFromDb)
      })
    })
    this.geoLocationsFormGroup = <FormGroup>this.parentFormGroup.get('geoLocations')
  }

  applyFromDb(geoLocationsFromDb: UserGeoLocations) {
    /* this should overwrite all locations, even if null, though remember,
    that if locations have not changed on the saving side, firebase will not trigger a change
    (because saved value is equal)
    */
    let geoSubKeys: GeoLocations
    if (geoLocationsFromDb && geoLocationsFromDb.geoLocations) {
      geoSubKeys = geoLocationsFromDb.geoLocations
    } else {
      geoSubKeys = {}
    }
    let geoLocationsTransformed = {}
    for (const keyName of Object.keys(formDefinition)) {
      const subKey = geoSubKeys[keyName]
      if ( subKey ) {
        geoLocationsTransformed[keyName] = subKey[0]
      } else {
        geoLocationsTransformed[keyName] = null
      }
    }
    console.log('geoLocationsTransformed', geoLocationsTransformed)
    // this.geoLocationsFormGroup.setValue(geoLocationsTransformed)
    this.parentFormGroup.setValue({geoLocations: geoLocationsTransformed})
    this.parentFormGroup.markAsPristine()
    // this.formGroup.patchValue(geoLocationsTransformed)
  }

  public getValue(): UserGeoLocations {
    return {
      geoLocations: transformIntoLocationDictionaries(this.geoLocationsFormGroup.value)
    }
  }

  static buildFormGroup(formBuilder: FormBuilder): FormGroup {
    // userInterests?.byInteractionMode?.symmetric?.exchange?.topics
    return formBuilder.group({
      geoLocations: formBuilder.group(formDefinition)
    })
  }

}
