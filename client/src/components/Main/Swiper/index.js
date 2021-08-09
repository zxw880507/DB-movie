import React from "react";
import { Carousel } from "react-bootstrap";

export default function Swiper() {
  return (
    <Carousel fade>
      <Carousel.Item interval="500">
        <img
          className="d-block w-100"
          src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/yizL4cEKsVvl17Wc1mGEIrQtM2F.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval="500">
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
      <Carousel.Item interval="500">
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
