import { useEffect, useState } from "react";
import "./HomeRouter.css";
import {
  getEventNearMe,
  getEventsBySearchTermAndLocation,
  getRandomEvents,
  pagination,
} from "../services/eventService";
import TravelEvent from "../models/TravelEvent";
import EventList from "./EventList";
import { useSearchParams } from "react-router-dom";
import Links from "../models/Links";

const HomeRouter = () => {
  const [events, setEvents] = useState<TravelEvent[] | null>(null);
  const [links, setLinks] = useState<Links | null>(null);
  let [searchParams] = useSearchParams();
  let city = searchParams.get("city") || null;
  let state = searchParams.get("state") || null;
  let query = searchParams.get("query") || null;
  let maxPrice = searchParams.get("maxPrice") || null;

  const pageChange = (uri: string): void => {
    pagination(uri).then((res) => {
      console.log(res);
      setEvents(res._embedded.events);
      setLinks(res._links);
    });
  };

  useEffect(() => {
    if (city || query || state) {
      getEventsBySearchTermAndLocation(city, state, query).then((res) => {
        let events = res._embedded.events;
        console.log(maxPrice);
        if (maxPrice) {
          events = events.filter((item) => item.priceRanges[0].min < +maxPrice);
        }
        setEvents(events);
        setLinks(res._links);
      });
    } else {
      let geopoint: any = {};
      const success = (position: any) => {
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
          setLinks(res._links);
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
          setLinks(res._links);
        });
      };
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, failure);
      }
    }
  }, [city, state, query, maxPrice]);

  return (
    <>
      <EventList travelEvents={events} links={links} pageChange={pageChange} />
    </>
  );
};

export default HomeRouter;
