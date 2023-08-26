import './index.css'

const PlanetItem = props => {
  const {eachContent} = props
  return (
    <div className="each-item-container">
      <img
        src={eachContent.imageUrl}
        alt={`planet ${eachContent.name}`}
        className="each-image"
      />
      <h1 className="heading">{eachContent.name}</h1>
      <p className="para">{eachContent.description}</p>
    </div>
  )
}

export default PlanetItem
