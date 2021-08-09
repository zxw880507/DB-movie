import { flexbox } from "@material-ui/system";
import React from "react";
import { Carousel } from "react-bootstrap";
const data = {
  adult: false,
  backdrop_path: "/yizL4cEKsVvl17Wc1mGEIrQtM2F.jpg",
  genre_ids: [28, 878],
  id: 588228,
  original_language: "en",
  original_title: "The Tomorrow War",
  overview:
    "The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species. The only hope for survival is for soldiers and civilians from the present to be transported to the future and join the fight. Among those recruited is high school teacher and family man Dan Forester. Determined to save the world for his young daughter, Dan teams up with a brilliant scientist and his estranged father in a desperate quest to rewrite the fate of the planet.",
  popularity: 2734.367,
  poster_path: "/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg",
  release_date: "2021-06-30",
  title: "The Tomorrow War",
  video: false,
  vote_average: 8.2,
  vote_count: 3252,
};
export default function Swiper() {
  return (
    <Carousel fade interval={null}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/yizL4cEKsVvl17Wc1mGEIrQtM2F.jpg"
          alt="First slide"
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,.8)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "70%",
              height: "100%",
              margin: "0 auto",
            }}
          >
            <img
              src="https://image.tmdb.org/t/p/w500/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg"
              alt=""
              style={{
                width: 250,
                height: 375,
                borderRadius: 10,
                boxShadow: "1px 1px 10px rgba(0,0,0,1)",
              }}
            />
            <div
              style={{
                height: 375,
                marginLeft: 30,
                color: "#fff",
                fontFamily: "Source Sans Pro', Arial, sans-serif",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                textShadow: "1px 1px 10px rgba(255,255,255, .2)",
              }}
            >
              <h1 style={{ fontWeight: "500" }}>
                {data.title}
                <span style={{ opacity: 0.8 }}>
                  {" "}
                  ({data.release_date.slice(0, 4)})
                </span>
              </h1>
              <div>
                <h4>Overview</h4>
                <p style={{ textAlign: "justify" }}>{data.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/xXHZeb1yhJvnSHPzZDqee0zfMb6.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces//dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
