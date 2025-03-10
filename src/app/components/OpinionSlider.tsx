"use client";
import Slider from "react-slick";
import { opinions } from "../data/opinions";
import OpinionCard from "./ui/OpinionCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OpinionSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {opinions.map((opinion, idx) => (
          <OpinionCard key={idx} {...opinion} />
        ))}
      </Slider>
    </div>
  );
};

export default OpinionSlider;
