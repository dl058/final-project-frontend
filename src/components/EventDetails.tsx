import "./EventDetails.css";

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getEventById } from "../services/eventService";
import TravelEvent from "../models/TravelEvent";
import FavoritesContext from "../context/FavoriteContext";

const EventDetails = () => {
  const [travelEvent, setTravelEvent] = useState<TravelEvent | null>(null);
  const id: string = useParams().id!;
  const { addFav, removeFav, isItAFav } = useContext(FavoritesContext);

  const findImage = (eventImage: TravelEvent) => {
    return eventImage.images.find((image) => image.ratio === "16_9");
  };

  const findDate = (dateTime: string) => {
    if (dateTime) {
      let date = dateTime.slice(5, 10);
      let year = dateTime.slice(0, 4);
      return `${date}-${year}`;
    }
  };

  const convertTime = (dateTime: string) => {
    if (dateTime) {
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

  useEffect(() => {
    if (id) {
      getEventById(id).then((res) => setTravelEvent(res));
    }
  }, [id]);
  console.log(travelEvent?.url);

  return (
    <div className="EventDetails">
      {travelEvent ? (
        <div className="Result">
          <h2>{travelEvent.name}</h2>
          <img src={findImage(travelEvent)?.url} className="eventDetailsImg" />
          <p>
            {travelEvent._embedded.venues[0].city.name}{" "}
            {travelEvent._embedded.venues[0].state.name},{" "}
            {travelEvent._embedded.venues[0].postalCode}
          </p>
          <a href={travelEvent.url} className="ticket">
            Purchase Ticket
          </a>
          <p>Date: {findDate(travelEvent.dates.start.dateTime)}</p>
          <p>Start Time: {convertTime(travelEvent.dates.start.dateTime)} EST</p>
          {travelEvent.info ? (
            <p className="eventDetailsInfo">{travelEvent.info}</p>
          ) : travelEvent.pleaseNote ? (
            <p className="eventDetailsInfo">{travelEvent.pleaseNote}</p>
          ) : (
            <p className="eventDetailsInfo">No info available at this time</p>
          )}
          {isItAFav(travelEvent.id) === false ? (
            <button onClick={() => addFav(travelEvent)} className="favBtn">
              <i className="fa-regular fa-heart"></i>
            </button>
          ) : (
            <button
              onClick={() => removeFav(travelEvent.id)}
              className="favBtn"
            >
              <i className="fa-solid fa-heart"></i>
            </button>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EventDetails;
