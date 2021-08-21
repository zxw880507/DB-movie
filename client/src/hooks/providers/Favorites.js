import { createContext, useContext } from "react";
import useFavorites from "../useFavorites";
const favoritesContext = createContext();

export function ProvideFavorites({ children }) {
  const fav = useFavorites();
  return (
    <favoritesContext.Provider value={fav}>
      {children}
    </favoritesContext.Provider>
  );
}

export function useFav() {
  return useContext(favoritesContext);
}
