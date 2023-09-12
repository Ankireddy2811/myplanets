import React, { Component } from "react";

import Cookies from "js-cookie";

import Slider from "react-slick";

import Header from "../Header"
import Footer from "../Footer"

import FoodBrands from "../FoodBrands";

import CarouselsContainer from "../CarouselsContainer";



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css"

const hairItems = JSON.parse(Cookies.get("hair_data"))
const foodData = JSON.parse(Cookies.get("food_data"))
const birthdayData = JSON.parse(Cookies.get("birthday_data"))
const catData = JSON.parse(Cookies.get("cat_data"))
const dogData = JSON.parse(Cookies.get("dog_data"))
const slidesAndTopBrands = JSON.parse(Cookies.get("slides_brand_data"))
const { initialSliderImages,brandData} = slidesAndTopBrands
const topCategoriesData = JSON.parse(Cookies.get("top_category_data"))
const popularData = JSON.parse(Cookies.get("popular_data"))


class Home extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        arrows: false,
       
        customPaging: (i) => (
          <span style={{ fontSize: "18px" }}>&#8212;</span> 
        ),
      
    };
    return (
      <div>
        <Header/>
        <Slider {...settings} className="slider-container">
          {initialSliderImages.map(eachItem=>(<div>
            <img src={eachItem} alt="home-slides" className="first-slide"/>
          </div>))}
          
        </Slider>
        <img src="https://headsupfortails.com/cdn/shop/files/loyalty_banner_web.png?v=1693482347" alt="birthdayImage" className="birthday-image"/>
        <img src="https://headsupfortails.com/cdn/shop/files/Sara_s_message_web_dec3b7da-fd2e-4de4-a99b-e54c8952b906.png?v=1693482531" alt="sepImage" className="birthday-image"/>
       <div className="birthday-sale-container">
        <img src="https://headsupfortails.com/cdn/shop/files/web_unit_912c8fac-f7c0-42f8-9b1f-51fde6e45fd5.svg?v=1693555371" alt="birthdayMainImage"/>
        <ul className="unordered-list-birthday-images">
          {birthdayData.map(eachItem=>(<li className="each-birthday-list-item"><img src={eachItem} alt="birthdayImage2" className="each-sub-image-item"/></li>))}
        </ul>
       </div>
       <FoodBrands popularData={popularData} headingContent="Popular Food Brands"/>
       <div className="wholesome-love-container">
       <h3 class="title">Try Sara's Wholesome Food 🤩</h3>
       <ul className="unordered-list-food-images">
        {foodData.map(eachItem=>(<li className="each-food-list-item"><img src={eachItem} alt="foodImage1" className="each-sub-image-item"/></li>))}
        </ul>
       </div>
      
       <div className="special-image-container">
       <img src="https://headsupfortails.com/cdn/shop/files/1720X320_1.jpg?v=1692870419" className="special-image" alt="specialImage"/>
       </div>
       <div className="counter-container">
         
       </div>
      <FoodBrands popularData={brandData} headingContent="Explore Top Brands"/>
      <div className="only-two-images-container">
        <img src="https://headsupfortails.com/cdn/shop/files/loveabowl_web.png?v=1689572910" alt="first-one" className="first-one"/>
        <img src="https://headsupfortails.com/cdn/shop/files/nature_s_hug_web.png?v=1689572925" alt="second-one" className="first-one"/>
      </div>
      <FoodBrands popularData={topCategoriesData} headingContent="Explore Top Categories"/>
      <img src="https://headsupfortails.com/cdn/shop/files/CAT_WEB_d811ada3-eeea-4837-8851-bddc46c11727.jpg?v=1689586735" alt="only-one" className="only-one"/>
      <ul className="unordered-cats-images">
        {catData.map(eachItem=>(<li className="cat-type-images"><img src={eachItem} alt="type-1" className="cat-type"/></li>))}
      </ul>
      <div className="health-images-container">
      <div class="text-container">
            <h2 className="heading-text">Boost Their Health</h2>
            <p className="para-text">Explore our supplement section and find the right match for every concern!</p>
      </div>
      <ul className="unordered-cats-images">
      {dogData.map(eachItem=>(<li className="cat-type-images"><img src={eachItem} alt="type-1" className="cat-type"/></li>))}
      </ul>
      
      </div>
      <img src="https://headsupfortails.com/cdn/shop/files/grooming_web_1_17fd54f8-894f-4b19-be2b-37e4e058e865.jpg?v=1689590399" alt="only-two" className="only-one"/>
      <ul className="unordered-cats-images">
       {hairItems.map(eachItem=>(<li className="hair-type-item">
        <img src={eachItem.imgUrl} alt={eachItem.name} className="hair-image"/>
        <p>{eachItem.name}</p>
       </li>))}
      </ul>
      <img src="https://headsupfortails.com/cdn/shop/files/beds_web.png?v=1689573185" alt="only-one" className="only-one"/>
     
      <div className="carousel-container">
      <h2 className="carousel-heading">Follow us <br/><span>@headsupfortails</span></h2>
      <CarouselsContainer/>
      </div>
      <img src="https://headsupfortails.com/cdn/shop/files/web-gif-_1.gif?v=1681127107" alt="only-one" className="only-one"/>
    <hr/>

<Footer/>
</div>
    );
  }
}

export default Home
