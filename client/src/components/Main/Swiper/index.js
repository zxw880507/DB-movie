import React, { useRef, useState, useEffect } from "react";
import TabItemList from "./TabItemList";
import data from "./data.json";
import useSwiper from "../../../hooks/useSwiper";
import "./Swiper.css";
export default function Swiper(props) {
  const { tab } = props;
  const overflow = useRef(null);
  const barContainer = useRef(null);
  const [PosisionX, setPositionX] = useState(0);
  const [overflowX, setOverflowX] = useState(0);
  const [barwidth, setBarwidth] = useState(undefined);
  const state = useSwiper(tab);
  console.log(state);
  useEffect(() => {
    let width =
      (overflow.current.parentNode.offsetWidth *
        barContainer.current.offsetWidth) /
      overflow.current.offsetWidth;
    setBarwidth(width);
  }, []);
  return (
    <div className="swiper-item-container">
      <TabItemList tab={tab} />
      <div className="overflow-container">
        <div
          className="overflow-box"
          style={{ left: overflowX }}
          ref={overflow}
        >
          {data.map((source, index) => (
            <div className="overflow-item-container" key={index}>
              <div className="overflow-img-box">
                <img
                  src={`https://image.tmdb.org/t/p/w500${source.poster_path}`}
                  alt=""
                  className="overflow-img"
                />
              </div>
              <div className="overflow-item-title-box">
                <p className="overflow-item-title">{source.title}</p>
                <p className="overflow-item-release">{source.release_date}</p>
              </div>
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
    </div>
  );
}
