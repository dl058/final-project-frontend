import { FormEvent, useState } from "react";
import "./LocationForm.css";
import { getLocation } from "../services/locationService";
import LocationResponse from "../models/LocationResponse";
import { useNavigate, useSearchParams } from "react-router-dom";

const LocationForm = () => {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const nav = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let params = {
      ...(city ? { city: city } : {}),
      ...(state ? { state: state } : {}),
      ...(query ? { query: query } : {}),
    };
    nav(`/events?${new URLSearchParams(params)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="Form">
      <label htmlFor="searchTerm">Search:</label>
      <input
        type="text"
        name="searchTerm"
        id="searchTerm"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        placeholder="Search for an Event"
      />
      <label htmlFor="city">City:</label>
      <input
        type="text"
        name="city"
        id="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter a city"
      />
      <label htmlFor="state">State:</label>
      <input
        type="text"
        name="state"
        id="state"
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder="Enter a state"
      />
      <button type="submit" className="search-btn">
        Search
      </button>
    </form>
  );
};

export default LocationForm;
