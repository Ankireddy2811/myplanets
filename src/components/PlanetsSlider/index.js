import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  console.log(planetsList)
  const settings = {
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 1000,
    dots: true,
  }
  return (
    <div className="bg-container" data-testid="planets">
      <h1 className="main-heading">Planets</h1>
      <Slider {...settings}>
        {planetsList.map(eachItem => (
          <PlanetItem key={eachItem.id} eachContent={eachItem} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
