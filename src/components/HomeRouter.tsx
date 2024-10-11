import { useEffect, useState } from "react";
import AccountRouter from "./AccountRouter";
import "./HomeRouter.css";
import { getEventNearMe, getRandomEvents } from "../services/eventService";
import TravelEvent from "../models/TravelEvent";
import EventList from "./EventList";
import SearchForm from "./SearchForm";

const HomeRouter = () => {
  const [events, setEvents] = useState<TravelEvent[] | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

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
<<<<<<< HEAD
=======
      <>
        <h1> unPlanned Adventure </h1>
        <p>
          Unplanned Adventure is your go-to for spontaneous, exciting
          experiences tailored just for you. Simply enter your zip code, set
          your adventure preferences, and let Unplan'd Adventure suggest
          unplanned activities that fit your budget and location. Whether you're
          looking to break free from routine or discover something new, Unplan'd
          Adventure makes it easy to explore without the hassle of planning.
          Because the best moments are the ones you don't plan!
        </p>
      </>
>>>>>>> 8d6f1e1467418751ab95f3c6d7e2ff849fe71ea5
      <AccountRouter />
      <SearchForm setSearchTerm={setSearchTerm} />
      <EventList travelEvents={events} />
    </>
  );
};

export default HomeRouter;
