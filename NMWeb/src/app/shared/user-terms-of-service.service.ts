import { Injectable } from '@angular/core';

// separate subtree in firebase with info like:
// - to which version of the TOS did the user agree
// - when first/last agreed to TOS
// - agreed to receiving email(s) ? -- this could be a separate service though
// -- -- email types:
// -- -- -- "would like to meet"
// -- -- -- "collaboration offer"
// -- -- -- -- ( by type, like co-founder, freelance)

/** Fun name, huh? */
@Injectable()
export class UserTermsOfServiceService {

  constructor() { }

}
