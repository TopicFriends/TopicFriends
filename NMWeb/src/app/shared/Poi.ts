import { GeoLocation } from '../user-profile-shared/user-geo-locations.types'

export class Poi {
  constructor(
    public title: string,
    public geoLocation: GeoLocation,
    public url?: string,
    public icon?: string,
  ) {
  }
}
