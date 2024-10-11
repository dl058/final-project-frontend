import axios from "axios";
import LocationResponse from "../models/LocationResponse";

const geocodeBaseUrl = "https://geocode.maps.co/search";
const apiKey: string = import.meta.env.VITE_API_LOCATION_KEY || "";

export const getLocation = async (
  street: string,
  city: string,
  state: string,
  country: string,
  postalcode: number
): Promise<LocationResponse> => {
  let params = {
    ...(street ? { street: street } : {}),
    ...(city ? { city: city } : {}),
    ...(state ? { state: state } : {}),
    ...(country ? { country: country } : {}),
    ...(postalcode ? { postalcode: postalcode } : {}),
    apikey: apiKey,
    countryCode: "US",
  };
  const res = await axios.get(`${geocodeBaseUrl}`, {
    params: params,
  });
  return res.data[0];
};
