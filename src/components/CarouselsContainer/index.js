import React, { Component } from "react";

import Cookies from "js-cookie";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css'; // Import your CSS file

const carouselData = JSON.parse(Cookies.get("carousel_data"))


export default class CarouselsContainer extends Component {
  render() {
    const settings = {
      arrows:false,
      dots: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };

    

    return (
      <div className="carousel-app-container">
        <Slider {...settings}>
          {carouselData.map((image, index) => (
            <div className="image-container-carousel">
              <img src={image} alt={`my${index + 1}`} className="carousel-images-width04" />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
