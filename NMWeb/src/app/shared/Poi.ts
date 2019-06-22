import { GeoLocation } from '../user-profile/user-profile-core/user-geo-locations.types'

export class Poi {
  constructor(
    public title: string,
    public geoLocation: GeoLocation,
    public url?: string,
    public icon?: string,
  ) {
  }
}
