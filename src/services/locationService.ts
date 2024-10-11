import axios from "axios";
import LocationResponse from "../models/LocationResponse";

const geocodeBaseUrl = "https://geocode.maps.co/search";
const apiKey: string = import.meta.env.VITE_API_LOCATION_KEY || "";

export const getLocation = async (q: string): Promise<LocationResponse> => {
  const res = await axios.get(`${geocodeBaseUrl}`, {
    params: { api_key: apiKey, q: q },
  });
  return res.data[0];
};
