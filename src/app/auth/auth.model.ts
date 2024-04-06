export type AccessToken = { access_token: string };

export interface UserData {
  name: string;
  gender: string;
  email: string;
  phone: string;
  school_name: string;
  password: string;
  role: string;
  experience: string;
  fav_subject?: string;
}