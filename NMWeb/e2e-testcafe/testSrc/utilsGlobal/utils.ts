import { ClientFunction } from "testcafe";

/** https://testcafe-discuss.devexpress.com/t/how-do-you-validate-url-in-testcafe/640 */
export const getWindowDocumentLocation = ClientFunction(() => document.location.href);

export const getWindowDocumentTitle = ClientFunction(() => document.title);
