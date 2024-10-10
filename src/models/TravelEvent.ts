interface GeoPoint {
  latitude: number;
  longitude: number;
}

interface Image {
  url: string;
}

interface Dates {
  start: Start;
}

interface Start {
  localDate: string;
  localTime: string;
  dateTime: string;
}

interface PriceRange {
  currency: string;
  min: number;
  max: number;
}

interface Venues {
  postalCode: string;
  timezone: string;
  city: City;
  state: State;
}

interface City {
  name: string;
}

interface State {
  name: string;
  stateCode: string;
}

interface Embedded {
  venues: Venues[];
}

export default interface TravelEvent {
  name: string;
  type: string;
  id: string;
  url: string;
  images: Image[];
  geoPoint?: GeoPoint;
  venue: Venues;
  keyword?: string;
  dates: Dates;
  priceRange: PriceRange[];
  state: State;
  city: City;
  _embedded: Embedded;
}
