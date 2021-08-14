import React from "react";
import TabItemList from "./TabItemList";
import useSwiper from "../../../hooks/useSwiper";
import useScroller from "../../../hooks/useScroller";
import "./Swiper.css";
export default function Swiper(props) {
  const { tab } = props;

  const { selectedTag, data, onChange } = useSwiper(tab);
  const { dimension, ref, onScroll } = useScroller(data);
  const { positionX, overflowX, barwidth } = dimension;
  return (
    <div className="swiper-item-container">
      <TabItemList tab={tab} selectedTag={selectedTag} onChange={onChange} />
      <div className="overflow-container">
        <div
          className="overflow-box"
          style={{ left: overflowX }}
          ref={ref.overflow}
        >
          {data &&
            data.map(
              (source, index) =>
                source.poster_path && (
                  <div className="overflow-item-container" key={index}>
                    <div className="overflow-img-box">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${source.poster_path}`}
                        alt=""
                        className="overflow-img"
                      />
                    </div>
                    <div className="overflow-item-title-box">
                      <p className="overflow-item-title">
                        {source.title || source.name}
                      </p>
                      <p className="overflow-item-release">
                        {source.release_date || source.first_air_date}
                      </p>
                    </div>
                  </div>
                )
            )}
        </div>
      </div>
      <div className="scrollbar-container" ref={ref.barContainer}>
        <span
          className="scrollbar"
          style={{
            width: barwidth,
            left: positionX,
          }}
          onMouseDown={onScroll}
        />
      </div>
    </div>
  );
}
