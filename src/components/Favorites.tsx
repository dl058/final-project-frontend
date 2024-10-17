import { useContext } from "react";
import "./Favorites.css";
import FavoritesContext from "../context/FavoriteContext";
import EventCard from "./EventCard";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  console.log(favorites);
  return (
    <div className="favoritesPage">
      <div className="Favorites">
        {favorites.map((fav) => (
          <EventCard travelEvent={fav} key={fav.id} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
