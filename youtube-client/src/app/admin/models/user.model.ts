import { UserData } from '../types/user-data.type';

export class User {
  admin: UserData = { loginData: 'catok1992@gmail.com', passwordData: '123456' };

  user: UserData;

  constructor(data: UserData = { loginData: '', passwordData: '' }) {
    this.user = data;
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

  getSortEntries(user: UserData): [string, string][] {
    return Object.entries(user).sort((a: [string, string], b: [string, string]) =>
      a[0].localeCompare(b[0]),
    );
  }
}
