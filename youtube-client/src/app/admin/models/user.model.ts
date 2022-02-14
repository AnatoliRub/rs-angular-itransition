import { UserData } from '../types/user-data.type';

export class User {
  admin: UserData = { loginData: 'catok1992@gmail.com', passwordData: '123456' };

  user: UserData;

  constructor(data: UserData = { loginData: '', passwordData: '' }) {
    this.user = data;
  }

  isAdminRole(): boolean {
    return (
      this.admin.loginData === this.user.loginData &&
      this.admin.passwordData === this.user.passwordData
    );
  }
}
