import { FormEvent, useState } from "react";
import "./LocationForm.css";
import { getLocation } from "../services/locationService";
import LocationResponse from "../models/LocationResponse";
import { useNavigate, useSearchParams } from "react-router-dom";

const LocationForm = () => {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const nav = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let params = {
      ...(city ? { city: city } : {}),
      ...(state ? { state: state } : {}),
      ...(query ? { query: query } : {}),
      ...(maxPrice ? { maxPrice: maxPrice } : {}),
    };
    nav(`/events?${new URLSearchParams(params)}`);
  };

  return (
    <div className="locationForm">
      <form onSubmit={handleSubmit} className="Form">
        <label htmlFor="searchTerm">Event Name or Type:</label>
        <input
          type="text"
          name="searchTerm"
          id="searchTerm"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder="e.g. Harry Potter or Music"
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
        <label htmlFor="maxPrice">Max Price:</label>
        <input
          type="text"
          name="maxPrice"
          id="maxPrice"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="Enter a Max Price"
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default LocationForm;
