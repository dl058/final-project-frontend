import { FormEvent, useState } from "react";
import "./LocationForm.css";
import { getLocation } from "../services/locationService";
import LocationResponse from "../models/LocationResponse";

interface Props {
  setLocationTerm: (string: any) => void;
  setSearchTerm: (string: string) => void;
}

const LocationForm = ({ setLocationTerm, setSearchTerm }: Props) => {
  const [query, setQuery] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [postalcode, setPostalcode] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSearchTerm(query);
    setLocationTerm({ street, city, state, country, postalcode });
  };

  return (
    <div className="LocationForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchTerm">Search:</label>
        <input
          type="text"
          name="searchTerm"
          id="searchTerm"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <label htmlFor="street">Street:</label>
        <input
          type="text"
          name="street"
          id="street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          placeholder="Enter an address"
        />
        <label htmlFor="city">City:</label>
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter an address"
        />
        <label htmlFor="state">State:</label>
        <input
          type="text"
          name="state"
          id="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="Enter an address"
        />
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          name="country"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Enter an address"
        />
        <label htmlFor="postalcode">Postalcode:</label>
        <input
          type="text"
          name="postalcode"
          id="postalcode"
          value={postalcode}
          onChange={(e) => setPostalcode(e.target.value)}
          placeholder="Enter an address"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default LocationForm;
