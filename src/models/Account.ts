import TravelEvent from "./TravelEvent";

export default interface Account {
  _id?: string;
  uid: string;
  display_name: string;
  favorites: TravelEvent[];
}
