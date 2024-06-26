interface Data {
  master: string;
  duplicates: string[];
}

interface Change {
  key: string;
  revision: number;
}

interface Author {
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

export interface DocSearch {
  cover_i: string;
  author_name: string[];
  key: string;
  type: string;
  title: string;
}
