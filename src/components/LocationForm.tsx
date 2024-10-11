import { FormEvent, useState } from "react";
import "./LocationForm.css";
import { getLocation } from "../services/locationService";
import LocationResponse from "../models/LocationResponse";

interface Props {
  setLocationTerm: (string: string) => void;
}

const LocationForm = ({ setLocationTerm }: Props) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    getLocation(query).then((location: LocationResponse) => {
      setLocationTerm(location.display_name);
      setQuery("");
    });
  };

  return (
    <div className="LocationForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="location-term">Location:</label>
        <input
          type="text"
          name="location-term"
          id="location-term"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter an address"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default LocationForm;
