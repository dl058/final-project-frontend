import axios from "axios";
import EventResponse from "../models/EventResponse";
import TravelEvent from "../models/TravelEvent";

const ticketmasterBaseUrl = "https://app.ticketmaster.com/discovery/v2/events";
const apiKey: string = import.meta.env.VITE_API_KEY || "";

export const getEventsByKeyword = async (
  keyword: string
): Promise<EventResponse> => {
  const res = await axios.get(`${ticketmasterBaseUrl}.json`, {
    params: { apikey: apiKey, countryCode: "US", keyword: keyword },
  });
  return res.data;
};

export const getEventByGeopoint = async (
  geopoint: any
): Promise<EventResponse> => {
  const res = await axios.get(`${ticketmasterBaseUrl}.json`, {
    params: {
      apikey: apiKey,
      countryCode: "US",
      geoPoint: `${geopoint.lat},${geopoint.lon}`,
    },
  });
  return res.data;
};

export const getEventsBySearchTermAndLocation = async (
  city: string | null,
  state: string | null,
  keyword: string | null
): Promise<EventResponse> => {
  let params = {
    ...(city ? { city: `${city},${city}` } : {}),
    ...(state ? { state: `${state},${state}` } : {}),
    ...(keyword ? { keyword: keyword } : {}),
    apikey: apiKey,
    countryCode: "US",
  };
  const res = await axios.get(`${ticketmasterBaseUrl}.json`, {
    params: params,
  });
  return res.data;
};

export const getEventById = async (id: string): Promise<TravelEvent> => {
  const res = await axios.get(`${ticketmasterBaseUrl}/${id}.json`, {
    params: { apikey: apiKey, countryCode: "US" },
  });
  return res.data;
};

export const getEventByAttractionId = async (
  attractionId: string
): Promise<EventResponse> => {
  const res = await axios.get(`${ticketmasterBaseUrl}/${attractionId}.json`, {
    params: { apikey: apiKey, countryCode: "US" },
  });
  return res.data;
};

export const getEventByVenueId = async (
  venueId: string
): Promise<EventResponse> => {
  const res = await axios.get(`${ticketmasterBaseUrl}/${venueId}.json`, {
    params: { apikey: apiKey, countryCode: "US" },
  });
  return res.data;
};
export const getRandomEvents = async (): Promise<EventResponse> => {
  const res = await axios.get(
    `https://app.ticketmaster.com/discovery/v2/suggest.json`,
    {
      params: { apikey: apiKey, countryCode: "US" },
    }
  );
  return res.data;
};

export const getEventNearMe = async (geopoint: any): Promise<EventResponse> => {
  const res = await axios.get(`${ticketmasterBaseUrl}.json`, {
    params: {
      apikey: apiKey,
      countryCode: "US",
      geoPoint: `${geopoint.latitude},${geopoint.longitude}`,
    },
  });
  return res.data;
};

export const pagination = async (uri: string): Promise<EventResponse> => {
  const res = await axios.get(`https://app.ticketmaster.com${uri}`, {
    params: {
      apikey: apiKey,
    },
  });
  return res.data;
};
