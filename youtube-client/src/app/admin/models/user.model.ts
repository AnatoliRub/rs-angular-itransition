import { UserData } from '../types/user-data.model';

export class User {
  admin: UserData = { loginData: 'catok1992@gmail.com', passwordData: '123456' };

  user: UserData;

  constructor(loginData: string, passwordData: string) {
    this.user = { loginData, passwordData };
  }

  isAdminRole(): boolean {
    const userData = this.getSortEntries(this.user);

    const adminData = this.getSortEntries(this.admin);

    return (
      userData.length === adminData.length &&
      userData.every(([userKey, userValue]: [string, string], i) => {
        const [adminKey, adminValue] = adminData[i];
        return userKey === adminKey && userValue === adminValue;
      })
    );
  }

  getSortEntries(user: UserData) {
    return Object.entries(user).sort((a: [string, string], b: [string, string]) =>
      a[0].localeCompare(b[0]),
    );
  }
}
