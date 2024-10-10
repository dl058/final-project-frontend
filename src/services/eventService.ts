import axios from "axios";
<<<<<<< HEAD
import EventResponse from "../models/EventResponse";
import TravelEvent from "../models/TravelEvent";
=======
import EventResponse from "../../../backend/functions/src/models/EventResponse";
>>>>>>> 93630054c4269478b9b1855d327ca5e517e613c8

const ticketmasterBaseUrl = "https://app.ticketmaster.com/discovery/v2/events";
const apiKey: string = import.meta.env.VITE_API_KEY || "";

export const getEventsByKeyword = async (
  keyword: string
): Promise<EventResponse> => {
  const res = await axios.get(`${ticketmasterBaseUrl}.json`, {
    params: { apikey: apiKey, keyword: keyword },
  });
  return res.data;
};

export const getEventById = async (id: string): Promise<TravelEvent> => {
  const res = await axios.get(`${ticketmasterBaseUrl}/${id}.json`, {
    params: { apikey: apiKey },
  });
  return res.data;
};

export const getEventByAttractionId = async (
  attractionId: string
): Promise<EventResponse> => {
  const res = await axios.get(`${ticketmasterBaseUrl}/${attractionId}.json`, {
    params: { apikey: apiKey },
  });
  return res.data;
};

export const getEventByVenueId = async (
  venueId: string
): Promise<EventResponse> => {
  const res = await axios.get(`${ticketmasterBaseUrl}/${venueId}.json`, {
    params: { apikey: apiKey },
  });
  return res.data;
};
export const getRandomEvents = async (): Promise<EventResponse> => {
  const res = await axios.get(
    `https://app.ticketmaster.com/discovery/v2/suggest.json`,
    {
      params: { apikey: apiKey },
    }
  );
  return res.data;
};

export const getEventByGeopoint = async (
  geoPoint: string
): Promise<EventResponse> => {
  const res = await axios.get(`${ticketmasterBaseUrl}/${geoPoint}.json`, {
    params: { apikey: apiKey },
  });
  return res.data;
};

export const getEventNearMe = async (geopoint: any): Promise<EventResponse> => {
  const res = await axios.get(`${ticketmasterBaseUrl}.json`, {
    params: {
      apikey: apiKey,
      geoPoint: `${geopoint.latitude},${geopoint.longitude}`,
    },
  });
  return res.data;
};
