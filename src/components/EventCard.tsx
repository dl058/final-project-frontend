import { Link } from "react-router-dom";
import "./EventCard.css";
import TravelEvent from "../models/TravelEvent";

interface Props {
  travelEvent: TravelEvent;
}

const EventCard = ({ travelEvent }: Props) => {
  return (
    <li className="EventCard">
      <Link to={`/user/${encodeURIComponent(travelEvent.id)}`}>
        <p>{travelEvent.name}</p>
        <p>Location: {travelEvent.locale}</p>
      </Link>
    </li>
  );
};

export default EventCard;
// each event and holds the detail pages

// name: string;
// type: string;
// id: string;

// url: string;
// locale: string;
// images: Image[];
// geoPoint?: GeoPoint;
// venueId?: string;
// attractionId?: string;
// keyword?: string;
