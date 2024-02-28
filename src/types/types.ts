export interface Data {
  master: string;
  duplicates: string[];
}

export interface Change {
  key: string;
  revision: number;
}

export interface Author {
  key: string;
}

export interface RecentChanges {
  id: string;
  kind: string;
  author: Author;
  ip: string;
  timestamp: string;
  comment: string;
  data: Data;
  changes: Change[];
}
