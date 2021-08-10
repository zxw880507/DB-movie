import React, { useRef, useState } from "react";
import data from "./data.json";

export default function Swiper() {
  const overflow = useRef(null);
  const barContainer = useRef(null);
  const [PosisionX, setPositionX] = useState(0);
  const [overflowX, setOverflowX] = useState(0);
  // console.log("PosisionX:", PosisionX);
  // console.log(overflow.current.parentNode);
  return (
    <>
      <div
        style={{
          overflow: "hidden",
          position: "relative",
          width: "100%",
          height: 751,
        }}
      >
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 0,
            left: overflowX,
          }}
          ref={overflow}
        >
          {data.map((source, index) => (
            <img
              key={index}
              src={`https://image.tmdb.org/t/p/w500${source.poster_path}`}
              alt=""
            />
          ))}
        </div>
      </div>
      <div
        style={{
          position: "relative",
          height: 20,
          backgroundColor: "rgba(0,0,0,.2)",
        }}
        ref={barContainer}
      >
        <span
          style={{
            position: "absolute",
            top: 0,
            left: PosisionX,
            width: "20%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,.8)",
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
              let overflowX = - newPositionX * overflowDist / maxPos;
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
