import { createContext } from "react";
import TravelEvent from "../models/TravelEvent";

interface FavoritesContextModel {
  favorites: TravelEvent[];
  addFav: (event: TravelEvent) => void;
  removeFav: (id: string) => void;
  isItAFav: (id: string) => boolean;
}

const defaultValues: FavoritesContextModel = {
  favorites: [],
  addFav: () => {},
  removeFav: () => {},
  isItAFav: () => false,
};

const FavoritesContext = createContext(defaultValues);
export default FavoritesContext;
