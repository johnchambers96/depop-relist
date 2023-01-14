/**
 * Data depop stores in local storage
 */
export type SessionUser = Record<"userId" | "username", string>;

/**
 * User data stored in session storage
 */
export type StoredUser = {
  bio: string;
  first_name: string;
  followers: number;
  following: number;
  id: number;
  initials: string;
  items_sold: number;
  last_name: string;
  last_seen: string;
  picture: Record<number, string>;
  reviews_rating: number;
  reviews_total: number;
  username: string;
  verified: boolean;
  website: string;
};
