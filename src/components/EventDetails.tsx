// import './EventDetails.css'

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../services/eventService";
import TravelEvent from "../models/TravelEvent";

const EventDetails = () => {
  const [travelEvent, setTravelEvent] = useState<TravelEvent | null>(null);
  const id: string = useParams().id!;

  const convertTime = (dateTime: string) => {
    if (travelEvent) {
      let hours = parseInt(dateTime.slice(11, 13));
      let time = dateTime.slice(13, 19);
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
  console.log(convertTime(travelEvent!.dates.start.dateTime));
  console.log(travelEvent?.dates.start.dateTime);

  useEffect(() => {
    if (id) {
      getEventById(id).then((res) => setTravelEvent(res));
    }
  }, [id]);

  return (
    <div className="EventDetails">
      {travelEvent ? (
        <div className="Result">
          <h2>{travelEvent.name}</h2>
          <img src={travelEvent.images[0].url} alt="" />
          <p>
            {travelEvent._embedded.venues[0].city.name}{" "}
            {travelEvent._embedded.venues[0].state.name},{" "}
            {travelEvent._embedded.venues[0].postalCode}
          </p>
          <p>{convertTime(travelEvent.dates.start.dateTime)} EST</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EventDetails;

// useparams to get id into here
// pull down id from path params get eventsdetails by id func,
// useParams()
