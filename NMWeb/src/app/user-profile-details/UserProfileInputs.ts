
export class UserProfileInputs {
  constructor(
    public userId: string,
    public isEditable: boolean,
    public isUserIdFromRouter: boolean,) {
  }
}
