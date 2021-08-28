import { useState, useEffect } from "react";
import axios from "axios";
import { dropMedium } from "../helpers";

export default function useFavorites(user) {
  const [favoritesList, setFavoritesList] = useState([]);

  const addFavorites = (data) => {
    axios
      .post("/user/favorites", data)
      .then(() => setFavoritesList((prev) => [...prev, data.source]));
  };
  const removeFavorites = (data) => {
    axios
      .delete("user/favorites", { data })
      .then(() => setFavoritesList((prev) => dropMedium(prev, data.source)));
  };

  const favorIt = (selected, data) => {
    if (!selected) {
      addFavorites(data);
    } else {
      removeFavorites(data);
    }
  };
  useEffect(() => {
    if (user) {
      axios
        .get("/user/favorites", {
          params: { userId: user.userId },
        })
        .then((res) => {
          setFavoritesList(res.data);
        });
    }
  }, [user]);

  return { favoritesList, setFavoritesList, favorIt };
}
