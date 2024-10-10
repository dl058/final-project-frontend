// import './EventDetails.css'

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../services/eventService";
import TravelEvent from "../models/TravelEvent";

const EventDetails = () => {
  const [travelEvent, setTravelEvent] = useState<TravelEvent | null>(null);
  const id: string = useParams().id!;

  useEffect(() => {
    if (travelEvent) {
      getEventById(id).then((res) => setTravelEvent(res));
    }
  }, [id]);

  return (
    <div className="EventDetails">
      {travelEvent ? (
        <div className="Result">
          <h2>{travelEvent.name}</h2>
          {/* add the dot notation data to travelEvent */}
          {/* <p>Date: {travelEvent}</p>
          <p>Location: {travelEvent}</p>
          <p>Description: {travelEvent}</p> */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EventDetails;

<<<<<<< HEAD
// useparams to get id into here
=======
// pull down id from path params get eventsdetails by id func,
// useParams()
>>>>>>> 93630054c4269478b9b1855d327ca5e517e613c8
