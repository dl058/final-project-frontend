import { useEffect, useState } from "react";
import AccountRouter from "./AccountRouter";
import "./HomeRouter.css";
import {
  getEventByGeopoint,
  getEventNearMe,
  getEventsByKeyword,
  getRandomEvents,
} from "../services/eventService";
import TravelEvent from "../models/TravelEvent";
import EventList from "./EventList";
import SearchForm from "./SearchForm";
import LocationForm from "./LocationForm";
import { getLocation } from "../services/locationService";

const HomeRouter = () => {
  const [events, setEvents] = useState<TravelEvent[] | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [locationTerm, setLocationTerm] = useState<string>("");

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

  useEffect(() => {
    if (locationTerm) {
      getLocation(locationTerm).then((res) => {
        getEventByGeopoint(res).then((res) => {
          setEvents(res._embedded.events);
        });
      });
    }
  }, [locationTerm]);

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
      <LocationForm setLocationTerm={setLocationTerm} />
      <EventList travelEvents={events} />
    </>
  );
};

export default HomeRouter;
