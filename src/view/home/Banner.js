import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

import banner from "./img/Banner.png";
import banner2 from "./img/casmurro.jpg";
import banner3 from "./img/guerra.jpg";

export default function Banner() {
  return (
    <Figure>
      <Carousel>
        <Carousel.Item>
          <Img className="d-block w-100" src={banner} alt="Banner1" />
          />
        </Carousel.Item>
        <Carousel.Item>
          <Img
            className="d-block w-100"
            src={banner2}
            width="890"
            height="500"
            alt="Banner2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Img
            className="d-block w-100"
            src={banner3}
            width="890"
            height="500"
            alt="Banner3"
          />
        </Carousel.Item>
      </Carousel>
    </Figure>
  );
}

const Figure = styled.figure`
  width: 1000px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  border: 5px solid #1086dc;
`;
