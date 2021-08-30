import React from "react";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

export default function FavItem(props) {
  const { source, removeFavorites } = props;

  return (
    <div className="favorite-item-container">
      <div className="favorite-img-box">
        <img
          src={`https://image.tmdb.org/t/p/w500${source.poster_path}`}
          alt=""
          className="favorite-img"
        />
        <button
          className="favorite-icon-btn"
          onClick={() => removeFavorites(source)}
        >
          <RemoveCircleIcon className="remove-icon" />
        </button>
      </div>
      <div className="favorite-item-title-box">
        <p className="favorite-item-title">{source.title || source.name}</p>
        <p className="favorite-item-release">
          {source.release_date || source.first_air_date}
        </p>
      </div>
    </div>
  );
}
