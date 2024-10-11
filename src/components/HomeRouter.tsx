import { useEffect, useState } from "react";
import AccountRouter from "./AccountRouter";
import "./HomeRouter.css";
import {
  getEventNearMe,
  getEventsByKeyword,
  getRandomEvents,
} from "../services/eventService";
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

  useEffect(() => {
    if (searchTerm) {
      getEventsByKeyword(searchTerm).then((res) => {
        setEvents(res._embedded.events);
      });
    }
  }, [searchTerm]);

  return (
    <>
      <AccountRouter />
      <SearchForm setSearchTerm={setSearchTerm} />
      <EventList travelEvents={events} />
    </>
  );
};

export default HomeRouter;
