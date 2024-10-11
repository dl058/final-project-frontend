import { FormEvent, useState } from "react";
import "./SearchForm.css";
import { useNavigate } from "react-router-dom";

interface Props {
  setSearchTerm: (string: string) => void;
}

const SearchForm = ({ setSearchTerm }: Props) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // setSearchTerm(query);
    navigate(`/?${new URLSearchParams({ term: query })}`);
    setQuery("");
  };
  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
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
      <button>Submit</button>
    </form>
  );
};

export default SearchForm;
