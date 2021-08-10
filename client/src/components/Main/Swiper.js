import React from "react";
import data from "./data.json";

export default function Swiper() {
  return (
    <>
      <div
        style={{
          overflow: "hidden",
          position: "relative",
          width: 1280,
          height: 751,
        }}
      >
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 0,
            left: 0
          }}
        >
          {data.map((source) => (
            <img
              src={`https://image.tmdb.org/t/p/w500${source.poster_path}`}
              alt=""
            />
          ))}
        </div>
      </div>
      <div style={{ height: 20, backgroundColor: "rgba(0,0,0,.2)" }}>
        <span
          style={{
            display: "block",
            width: "20%",
            height: "90%",
            backgroundColor: "rgba(0,0,0,.8)",
          }}
          onScroll={(e) => {}}
        />
      </div>
    </>
  );
}
