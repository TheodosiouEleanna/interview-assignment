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

export interface IUser {
  id: string;
  object: string;
  name: string;
  email: string;
  url: string;
}
export interface ICurrency {
  cents: number;
  currency: string;
}
interface ISource {
  id: string;
  name: string;
  channel_type_code: string;
}
export interface ICalendarEvent {
  booking_value: string | null;
  channel_notes: string | null;
  channel_special_request_messages: string[];
  channel_special_requests: string[];
  cleaning_fee: number | null;
  created: number;
  created_by: IUser;
  created_on_channel: number | null;
  date_from: string;
  date_to: string;
  external_point_of_sale: null;
  guest_address: null;
  guest_adults: number | null;
  guest_child_ages: null;
  guest_children: number | null;
  guest_city: string | null;
  guest_country: string | null;
  guest_email: string | null;
  guest_identification_number: number | null;
  guest_identification_type: string | null;
  guest_name: string;
  guest_number: number;
  guest_paid: ICurrency;
  guest_phone: string | null;
  guest_remarks: string | null;
  guest_zip_code: string | null;
  hold_reason: string;
  id: string;
  is_visible: boolean;
  location: string;
  master_calendar_event_id: string | null;
  meal_plan: string | null;
  nights: number;
  notes: string;
  object: string;
  other_fees: ICurrency;
  payment_charges: null;
  rental: IRental;
  reservation_id: string;
  room_guest_name: string | null;
  room_remarks: string | null;
  service_fee_guest: ICurrency;
  service_fee_host: ICurrency;
  smoking_preference: boolean;
  source: null;
  taxes: null;
  title: string;
  total_payout: ICurrency;
  type: string;
  updated: number;
  url: string;
}
