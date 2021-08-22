import { useState, useEffect } from "react";
import axios from "axios";

export default function useFavorites() {
  const [favoritesList, setFavoritesList] = useState([]);

  const addFavorites = (data) => {
    axios.post("/user/favorites", data);
  };
  const removeFavorites = (data) => {
    axios.delete("user/favorites", { data });
  };

  const favorIt = (selected, data) => {
    if (!selected) {
      addFavorites(data);
    } else {
      removeFavorites(data);
    }
  };
  useEffect(() => {
    axios
      .get("/user/favorites", { params: {} })
      .then((res) => setFavoritesList());
  }, []);

  return { favoritesList, favorIt };
}
