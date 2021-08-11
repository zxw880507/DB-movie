import React, { useRef, useState, useEffect } from "react";
import data from "./data.json";
import "./Swiper.css";

export default function Swiper() {
  const overflow = useRef(null);
  const barContainer = useRef(null);
  const [PosisionX, setPositionX] = useState(0);
  const [overflowX, setOverflowX] = useState(0);
  const [barwidth, setBarwidth] = useState(undefined);

  useEffect(() => {
    let width =
      (overflow.current.parentNode.offsetWidth *
        barContainer.current.offsetWidth) /
      overflow.current.offsetWidth;
    setBarwidth(width);
  }, [data]);
  return (
    <>
      <div className="tab-container">
        <h4 className="tab-container-title">What's Popular</h4>
        <ul className="tab-list">
          <li className="tab-selected">
            <p>Movies</p>
          </li>
          <li>
            <p>TV</p>
          </li>
        </ul>
      </div>
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
            width: barwidth,
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
