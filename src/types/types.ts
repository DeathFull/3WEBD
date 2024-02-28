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

interface AuthorRole {
  key: string;
}

interface AuthorInfo {
  type: AuthorRole;
  author: Author;
}

interface DateTime {
  type: string;
  value: string;
}

export interface Work {
  first_publish_date: string;
  title: string;
  subject_places: string[];
  lc_classifications: string[];
  key: string;
  authors: AuthorInfo[];
  dewey_number: string[];
  type: { key: string };
  subjects: string[];
  covers: number[];
  latest_revision: number;
  revision: number;
  created: DateTime;
  last_modified: DateTime;
}
