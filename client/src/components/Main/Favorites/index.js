import React, { useState, useEffect } from "react";
import "./Favorites.css";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import { useFav } from "../../../hooks/providers/Favorites";
import FilterTab from "./FilterTab";

const tabs = {
  media_type: ["movie", "TV", "all"],
  sort_by: ["name", "release_date"],
  order: ["desc", "asc"],
};
export default function Favorites() {
  const { favoritesList } = useFav();
  const [filters, setFilters] = useState({
    media_type: "all",
    sort_by: "name",
    order: "desc",
  });

  console.log(favoritesList);
  const onSelect = (category, value) => {
    setFilters((prev) => ({ ...prev, [category]: value }));
  };
  return (
    <div className="favorite-main-container">
      <div className="favorite-head-img" />
      <div className="favorite-header">
        <h1>Favorite List</h1>
        <div className="favorite-filter-list">
          {Object.keys(tabs).map((category, index) => (
            <FilterTab
              key={index}
              category={category}
              values={tabs[category]}
              selectedValue={filters[category]}
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>

      <div className="favorite-list-grid">
        {favoritesList.map((source) => (
          <div className="favorite-item-container" key={source.id}>
            <div className="favorite-img-box">
              <img
                src={`https://image.tmdb.org/t/p/w500${source.poster_path}`}
                alt=""
                className="favorite-img"
              />
              <button className="favorite-icon-btn">
                <RemoveCircleIcon className="remove-icon" />
              </button>
            </div>
            <div className="favorite-item-title-box">
              <p className="favorite-item-title">
                {source.title || source.name}
              </p>
              <p className="favorite-item-release">
                {source.release_date || source.first_air_date}
              </p>
            </div>
          </div>
        ))}
        <HiddenBox />
      </div>
    </div>
  );
}

function HiddenBox() {
  return (
    <>
      {[...new Array(12).keys()].map((el, index) => (
        <div key={index} className="favorite-item-container hidden"></div>
      ))}
    </>
  );
}
