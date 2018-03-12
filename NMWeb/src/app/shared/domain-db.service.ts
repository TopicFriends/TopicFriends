import { Injectable } from '@angular/core';

@Injectable()
export class DomainDbService {


  USER_DATA = 'UserData/';

  /* FIXME: split into user data (profile) specific paths, other paths */
  PATHS = { /* TODO move to smth like shared/db-paths.ts (or DomainDbService; welcome back, but do not put much logic there) by analogy to routes.ts,
    to have a centralized place (e.g. to be able to review naming consistency)
    */
    USER_PROFILE: this.USER_DATA + 'UserProfile' /* really user basic info */,
    USER_INTERESTS: this.USER_DATA + 'UserInterests',
    OTHER_PROFILES: this.USER_DATA + 'OtherProfiles',
    GEO_LOCATIONS: this.USER_DATA + 'GeoLocations',
    DESCRIPTIONS: this.USER_DATA + 'Descriptions',
    SKILL_LEVELS: this.USER_DATA + 'UserSkillLevels',
  }

  constructor() { }

}
