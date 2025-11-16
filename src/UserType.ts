/**
 * Represents a user entity with core required fields and optional extended properties.
 * 
 * @property id - Unique identifier for the user
 * @property name - Full name of the user
 * @property username - Username for the user account
 * @property email - Email address of the user
 * @property phone - Optional contact phone number
 * @property website - Optional personal or professional website URL
 * @property address - Optional physical address details
 * @property company - Optional company/organization information
 */
export type User = {
  id: number;
  name: string;
  username: string;
  email: string;

  phone?: string;
  website?: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
