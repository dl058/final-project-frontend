import { ReactNode, useContext, useEffect, useState } from "react";
import TravelEvent from "../models/TravelEvent";
import FavoritesContext from "./FavoriteContext";
import { addFavEvent, removeFavEvent } from "../services/accountService";
import AuthContext from "./AuthContext";

interface Props {
  children: ReactNode;
}

const FavoritesContextProvider = ({ children }: Props) => {
  const [favorites, setFavorites] = useState<TravelEvent[]>([]);
  const { account } = useContext(AuthContext);
  useEffect(() => {
    if (account) {
      setFavorites(account.favorites);
    } else {
      setFavorites([]);
    }
  }, [account]);
  const addFav = (event: TravelEvent): void => {
    setFavorites((prev) => [...prev, event]);
    if (account) {
      addFavEvent(account._id!, event);
    }
  };

  const removeFav = (id: string): void => {
    const foundIndex = favorites.findIndex((fav) => fav.id === id);
    setFavorites((prev) => {
      let copy = prev.slice(0);
      copy.splice(foundIndex, 1);
      return copy;
    });
    if (account) {
      removeFavEvent(account._id!, id);
    }
  };

  const isItAFav = (id: string): boolean => {
    return favorites.some((fav) => fav.id === id);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites: favorites,
        addFav: addFav,
        removeFav: removeFav,
        isItAFav: isItAFav,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
export default FavoritesContextProvider;
