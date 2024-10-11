import { Link } from "react-router-dom";
import "./EventCard.css";
import TravelEvent from "../models/TravelEvent";
import { useContext } from "react";
import FavoritesContext from "../context/FavoriteContext";

interface Props {
  travelEvent: TravelEvent;
}

const EventCard = ({ travelEvent }: Props) => {
  const { addFav } = useContext(FavoritesContext);
  const { removeFav } = useContext(FavoritesContext);
  const { isItAFav } = useContext(FavoritesContext);
  // To convert Zulu time to EST
  const convertTime = (dateTime: string) => {
    if (travelEvent) {
      let hours = parseInt(dateTime.slice(11, 13));
      let time = dateTime.slice(13, 16);
      let morning = true;
      morning = hours > 16 || hours < 4 ? false : true;
      hours = hours % 12 === 0 ? 12 : hours % 12;
      if (hours > 4) {
        hours -= 4;
      } else if (hours === 4) {
        hours = 12;
      } else {
        let diff = 4 - hours;
        hours = 12 - diff;
      }
      return `${hours}${time}${morning ? "AM" : "PM"}`;
    }
  };

  // const edit;
  return (
    <li className="EventCard">
      <Link
        to={`/event/${encodeURIComponent(travelEvent.id)}`}
        className="travelEventId"
      >
        <p>{travelEvent.name}</p>
        <img src={travelEvent.images[4].url} className="eventCardImg" />
        <p>
          Location: {travelEvent._embedded.venues[0].city.name},{" "}
          {travelEvent._embedded.venues[0].state.stateCode},{" "}
          {convertTime(travelEvent.dates.start.dateTime)}
        </p>
      </Link>
      {isItAFav(travelEvent.id) === false ? (
        <button onClick={() => addFav(travelEvent)}>Favorite</button>
      ) : (
        <button onClick={() => removeFav(travelEvent.id)}>Remove</button>
      )}
    </li>
  );
};

export default EventCard;
// each event and holds the detail pages
