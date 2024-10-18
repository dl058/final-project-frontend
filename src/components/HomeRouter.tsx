import { useEffect, useState } from "react";
import "./HomeRouter.css";
import {
  getEventNearMe,
  getEventsBySearchTermAndLocation,
  getRandomEvents,
} from "../services/eventService";
import TravelEvent from "../models/TravelEvent";
import EventList from "./EventList";
import { useSearchParams } from "react-router-dom";

const HomeRouter = () => {
  const [events, setEvents] = useState<TravelEvent[] | null>(null);
  let [searchParams] = useSearchParams();
  let city = searchParams.get("city") || null;
  let state = searchParams.get("state") || null;
  let query = searchParams.get("query") || null;
  let maxPrice = searchParams.get("maxPrice") || null;
  useEffect(() => {
    if (city || query || state) {
      getEventsBySearchTermAndLocation(city, state, query).then((res) => {
        let events = res._embedded.events;
        console.log(maxPrice);
        if (maxPrice) {
          events = events.filter((item) => item.priceRanges[0].min < +maxPrice);
        }
        setEvents(events);
      });
    } else {
      let geopoint: any = {};
      const success = (position: any) => {
        console.log(position);
        console.log(position.coords.latitude);

        geopoint.latitude = position.coords.latitude;
        geopoint.longitude = position.coords.longitude;
        getEventNearMe(geopoint).then((res) => {
          let events = res._embedded.events;
          if (maxPrice) {
            events = events.filter(
              (item) => item.priceRanges[0].min < +maxPrice
            );
          }
          setEvents(events);
        });
      };
      const failure = () => {
        console.log("Geolocation not available");
        getRandomEvents().then((res) => {
          let events = res._embedded.events;
          if (maxPrice) {
            events = events.filter(
              (item) => item.priceRanges[0].min < +maxPrice
            );
          }
          setEvents(events);
        });
      };
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, failure);
      }
    }
  }, [city, state, query, maxPrice]);

  return (
    <>
      <EventList travelEvents={events} />
    </>
  );
};

export default HomeRouter;
