import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Carousel } from "react-bootstrap";

const data = [
  {
    adult: false,
    backdrop_path: "/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg",
    genre_ids: [28, 12, 53, 878],
    id: 497698,
    original_language: "en",
    original_title: "Black Widow",
    overview:
      "Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.",
    popularity: 5992.437,
    poster_path: "/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
    release_date: "2021-07-07",
    title: "Black Widow",
    video: false,
    vote_average: 7.9,
    vote_count: 3919,
  },
  {
    adult: false,
    backdrop_path: "/bwBmo4I3fqMsVvVtamyVJHXGnLF.jpg",
    genre_ids: [12, 14, 35, 28],
    id: 451048,
    original_language: "en",
    original_title: "Jungle Cruise",
    overview:
      "Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his dilapidated boat. Together, they search for an ancient tree that holds the power to heal – a discovery that will change the future of medicine.",
    popularity: 5812.972,
    poster_path: "/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg",
    release_date: "2021-07-28",
    title: "Jungle Cruise",
    video: false,
    vote_average: 8,
    vote_count: 1286,
  },
  {
    adult: false,
    backdrop_path: "/xXHZeb1yhJvnSHPzZDqee0zfMb6.jpg",
    genre_ids: [28, 80, 53],
    id: 385128,
    original_language: "en",
    original_title: "F9",
    overview:
      "Dominic Toretto and his crew battle the most skilled assassin and high-performance driver they've ever encountered: his forsaken brother.",
    popularity: 4973.593,
    poster_path: "/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg",
    release_date: "2021-05-19",
    title: "F9",
    video: false,
    vote_average: 7.7,
    vote_count: 2315,
  },
];

const useStyles = makeStyles({
  shadeCover: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,.8)",
  },
  innerContainer: {
    display: "flex",
    alignItems: "center",
    width: "70%",
    height: "100%",
    margin: "0 auto",
  },
  poster: {
    width: 250,
    height: 375,
    borderRadius: 10,
    boxShadow: "1px 1px 10px rgba(0,0,0,1)",
  },
  detailBox: {
    height: 375,
    paddingLeft: 30,
    color: "#fff",
    fontFamily: "Source Sans Pro', Arial, sans-serif",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    textShadow: "1px 1px 10px rgba(255,255,255, .2)",
  },
});
export default function Header() {
  const classes = useStyles();
  return (
    <Carousel fade>
      {data.map((movie, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}`}
            alt={`${movie.title}_background`}
          />
          <div className={classes.shadeCover}>
            <div className={classes.innerContainer}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={`${movie.title}_poster`}
                className={classes.poster}
              />
              <div className={classes.detailBox}>
                <div>
                  <h1 style={{ fontWeight: "500" }}>
                    {movie.title}
                    <span style={{ opacity: 0.8 }}>
                      {" "}
                      ({movie.release_date.slice(0, 4)})
                    </span>
                  </h1>
                  <p>
                    <span>{movie.release_date}</span> ・{" "}
                    <span>Action, Science Fiction</span>
                  </p>
                </div>
                <div>
                  <h4>Overview</h4>
                  <p style={{ textAlign: "justify" }}>{movie.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
