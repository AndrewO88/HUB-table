export class Users {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;

  constructor(id: number, firstName: string, lastName: string, email: string, mobile: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.mobile = mobile;
  }
}
export interface Schema {
  Scheme: string;
  Tables: [Tables];
  lastName: string;
  email: string;
  mobile: string;
}
export interface Tables {
  uid: string;
  Name: string;
  VisualName: string;
  Columns: [Columns];
}
export interface Columns {
  uid: string;
  Name: string;
  VisualName: string;
  Type: string;
}
