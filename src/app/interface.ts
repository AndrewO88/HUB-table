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
