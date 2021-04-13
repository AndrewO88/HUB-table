export interface Entity {
  id: string;
  displayName: string;
}

export interface User {
  profile: Profile
}

export interface Profile {
  name: string;
  lastName: string;
  email: string;
  mobile: string;
}

export interface Schema {
  scheme: string;
  owner: User;
  tables: Table[];
}
export interface Table extends Entity {
  columns: Column[];
}
export interface Column extends Entity {
  type: string;
}
