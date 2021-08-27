/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Favorites.css";

export default function Favorites() {
  return (
    <div className="favorite-main-container">
      <div className="favorite-head-img"></div>
      <div className="favorite-list-box">
        <h1>Favorite List</h1>
        <div className="favorite-filter-list">
          <div className="favorite-filter-item">
            <span>Media Type</span>
            <ul className="favorite-filter-tab-list">
              <li>
                <a>Movie</a>
              </li>
              <li>
                <a>TV</a>
              </li>
            </ul>
          </div>
          <div className="favorite-filter-item">
            <span>Sort By</span>
            <ul className="favorite-filter-tab-list">
              <li className="tab-item-selected">
                <a>Name</a>
              </li>
              <li>
                <a>Release Date</a>
              </li>
            </ul>
          </div>
          <div className="favorite-filter-item">
            <span>Order</span>
            <ul className="favorite-filter-tab-list">
              <li>
                <a>ascending</a>
              </li>
              <li>
                <a>descending</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
