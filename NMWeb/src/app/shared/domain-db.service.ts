import { Injectable } from '@angular/core';

/**
 * The role of this class: to have a single lightweight place where all the names/paths can be listed.
 * E.g. for analysing naming consistency, and to get a quick glimpse of the domain db overall structure.
 * Do not put module-specific logic here (it belongs in specific services).
 *
 * Later I might decide to split into smth like UserProfileDb; but that would kinda negate the "have all the names in one place",
 * plus it might be too much hair-splitting. Time will show :).
 */
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
