import React, { useRef, useState } from "react";
import data from "./data.json";
import "./Swiper.css";

export default function Swiper() {
  const overflow = useRef(null);
  const barContainer = useRef(null);
  const [PosisionX, setPositionX] = useState(0);
  const [overflowX, setOverflowX] = useState(0);

  return (
    <>
      <div className="overflow-container">
        <div
          className="overflow-box"
          style={{ left: overflowX }}
          ref={overflow}
        >
          {data.map((source, index) => (
            <div key={index} className="overflow-img-box">
              <img
                src={`https://image.tmdb.org/t/p/w500${source.poster_path}`}
                alt=""
                className="overflow-img"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="scrollbar-container" ref={barContainer}>
        <span
          className="scrollbar"
          style={{
            left: PosisionX,
          }}
          onMouseDown={(e) => {
            const outerX = barContainer.current.offsetLeft;
            const x = e.pageX - outerX - e.target.offsetLeft;
            const maxPos =
              barContainer.current.offsetWidth - e.target.offsetWidth;
            //get overflow accessible moving distance
            const overflowDist =
              overflow.current.offsetWidth -
              overflow.current.parentNode.offsetWidth;

            const move = (e) => {
              let newPositionX = e.pageX - outerX - x;
              if (newPositionX > maxPos) {
                newPositionX = maxPos;
              }
              if (newPositionX < 0) {
                newPositionX = 0;
              }
              let overflowX = (-newPositionX * overflowDist) / maxPos;
              setPositionX(newPositionX);
              setOverflowX(overflowX);
            };
            document.addEventListener("mousemove", move);
            document.addEventListener("mouseup", () => {
              document.removeEventListener("mousemove", move);
            });
          }}
        />
      </div>
    </>
  );
}
