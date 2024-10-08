import { useEffect, useState } from "react";
import AccountRouter from "./AccountRouter";

import "./HomeRouter.css";
import { getEventNearMe, getRandomEvents } from "../services/eventService";
import TravelEvent from "../models/TravelEvent";
import EventList from "./EventList";

const HomeRouter = () => {
  const [events, setEvents] = useState<TravelEvent[] | null>(null);

  useEffect(() => {
    let geopoint: any = {};
    const success = (position: any) => {
      console.log(position);
      console.log(position.coords.latitude);

      geopoint.latitude = position.coords.latitude;
      geopoint.longitude = position.coords.longitude;
      getEventNearMe(geopoint).then((res) => {
        setEvents(res._embedded.events);
      });
    };
    const failure = () => {
      console.log("Geolocation not available");
      getRandomEvents().then((res) => {
        setEvents(res._embedded.events);
      });
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, failure);
    }
  }, []);
  console.log(events);

  return (
    <>
      <>
        <h1> unPlanned Adventure </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In voluptas
          excepturi doloribus animi ullam nemo aperiam quod. Quam laboriosam,
          molestiae, velit eius aliquid dolor qui non, error voluptatibus
          dignissimos fugiat?
        </p>
      </>
      <AccountRouter />
      <EventList travelEvents={events} />
    </>
  );
};

export default HomeRouter;
