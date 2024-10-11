import { useEffect, useState } from "react";
import AccountRouter from "./AccountRouter";
import "./HomeRouter.css";
import {
  getEventByGeopoint,
  getEventNearMe,
  getEventsByKeyword,
  getEventsBySearchTermAndLocation,
  getRandomEvents,
} from "../services/eventService";
import TravelEvent from "../models/TravelEvent";
import EventList from "./EventList";
import LocationForm from "./LocationForm";
import { getLocation } from "../services/locationService";

const HomeRouter = () => {
  const [events, setEvents] = useState<TravelEvent[] | null>(null);
  const [searchTerm, setSearchTerm] = useState<string | null>("");
  const [locationTerm, setLocationTerm] = useState<any>("");

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
    if (locationTerm || searchTerm) {
      getLocation(
        locationTerm.street,
        locationTerm.city,
        locationTerm.state,
        locationTerm.country,
        locationTerm.postalcode
      ).then((res) => {
        console.log(res);

        let geo = null;
        if (res) {
          geo = res;
        }
        if (searchTerm === "") {
          setSearchTerm(null);
        }
        getEventsBySearchTermAndLocation(geo, searchTerm).then((res) => {
          setEvents(res._embedded.events);
        });
      });
    }
  }, [locationTerm, searchTerm]);

  return (
    <>
      <AccountRouter />
      <LocationForm
        setLocationTerm={setLocationTerm}
        setSearchTerm={setSearchTerm}
      />
      <EventList travelEvents={events} />
    </>
  );
};

export default HomeRouter;
