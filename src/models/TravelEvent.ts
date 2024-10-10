interface GeoPoint {
  latitude: number;
  longitude: number;
}

interface Image {
  url: string;
}

export default interface TravelEvent {
  name: string;
  type: string;
  id: string;
  test: boolean;
  url: string;
  locale: string;
  images: Image[];
  geoPoint?: GeoPoint;
  venueId?: string;
  attractionId?: string;
  keyword?: string;
}
