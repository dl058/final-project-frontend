import { Link } from "react-router-dom";
import "./EventCard.css";
import TravelEvent from "../models/TravelEvent";

interface Props {
  travelEvent: TravelEvent;
}

const EventCard = ({ travelEvent }: Props) => {
  // const edit;
  return (
    <li className="EventCard">
      <Link to={`/user/${encodeURIComponent(travelEvent.id)}`}>
        <p>{travelEvent.name}</p>
        <p>
          Location {travelEvent._embedded.venues[0].city.name},
          {travelEvent._embedded.venues[0].state.name}
        </p>
      </Link>
    </li>
  );
};

export default EventCard;
// each event and holds the detail pages
