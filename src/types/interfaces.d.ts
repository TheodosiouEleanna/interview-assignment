export interface IRental {
  check_in_time: string;
  checkout_time: string;
  city: string | null;
  country: string;
  currency: string;
  id: string;
  image_path: string;
  latitude: number | null;
  longitude: number | null;
  name: string | null;
  object: string | null;
  postal_code: string;
  rates_confirmed: true;
  status: string;
  time_zone: string;
  url: string;
}

export interface ICalendarEvents {}
