export class User {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  constructor() {
    this.userId = 0;
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
  }
}
