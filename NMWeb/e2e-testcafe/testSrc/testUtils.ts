import { ClientFunction } from 'testcafe'

/** https://testcafe-discuss.devexpress.com/t/how-do-you-validate-url-in-testcafe/640 */
export const getLocation = ClientFunction(() => document.location.href);
