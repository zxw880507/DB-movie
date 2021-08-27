/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Favorites.css";
import data from "./data.json";

export default function Favorites() {
  return (
    <div className="favorite-main-container">
      <div className="favorite-head-img"></div>
      <div className="favorite-header">
        <h1>Favorite List</h1>
        <div className="favorite-filter-list">
          <div className="favorite-filter-item">
            <div className="favorite-filter-tab-label">
              <span>Media Type</span>
            </div>
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
            <div className="favorite-filter-tab-label">
              <span>Sort By</span>
            </div>
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
            <div className="favorite-filter-tab-label">
              <span>Order</span>
            </div>
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

      <div className="favorite-list-grid">
        {data.map((source) => (
          <div className="favorite-item-container">
            <div className="favorite-img-box">
              <img
                src={`https://image.tmdb.org/t/p/w500${source.poster_path}`}
                alt=""
                className="favorite-img"
              />
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
      <div class="favorite-item-container hidden"></div>
      <div class="favorite-item-container hidden"></div>
      <div class="favorite-item-container hidden"></div>
      <div class="favorite-item-container hidden"></div>
      <div class="favorite-item-container hidden"></div>
      <div class="favorite-item-container hidden"></div>
      <div class="favorite-item-container hidden"></div>
      <div class="favorite-item-container hidden"></div>
      <div class="favorite-item-container hidden"></div>
      <div class="favorite-item-container hidden"></div>
      <div class="favorite-item-container hidden"></div>
      <div class="favorite-item-container hidden"></div>
      <div class="favorite-item-container hidden"></div>
    </>
  );
}
