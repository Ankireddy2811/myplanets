import Slider from 'react-slick'

// import Cookies from "js-cookie";

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import "./index.css";




const ArrowLeft = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, left: '10px', zIndex: 1,backgroundColor: 'black' }}
      onClick={onClick}
    >
     
      &lt;
    </div>
  );
}; 
 
const ArrowRight = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, right: '10px', zIndex: 1 ,backgroundColor: 'black'}}
      onClick={onClick}
    >
    
      &gt;
    </div>
  );
};

const FoodBrands = (props) => {
  const {popularData,headingContent} = props
  const settings = {
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 4,
    prevArrow: <ArrowLeft />, 
    nextArrow: <ArrowRight />,
  }
  
  const stylingBgColor = headingContent !== "Popular Food Brands" ? "container-bg-color-1":"container-bg-color-2"

  return (
    <div className={`total-food-container ${stylingBgColor}`}>
      <h1 className='heading6'>{headingContent}</h1>
      <Slider {...settings}>
      {popularData.map((eachItem) => (
            <div className="image-container" style={{margin:"10px"}}>
              <img src={eachItem.imgUrl} alt={eachItem.content} className="my-images-width" />
              <h3 className='food-heading'>{eachItem.content}</h3>
              <h3 className='food-heading'>{eachItem.name}</h3>
              <p className='food-para'>{eachItem.discount}</p>
            </div>
          ))}


       
      </Slider>
    </div>
  )
}

export default FoodBrands 


