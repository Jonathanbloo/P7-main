import PropTypes from 'prop-types'
import { useState } from 'react'
import '../styles/logement.css'
import '../styles/carousel.css'
import Arrowright from '../assets/arrow_right.png'
import Arrowleft from '../assets/arrow_left.png'

function Carousel({ imagesCarousel }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesCarousel.length)
  }

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + imagesCarousel.length) % imagesCarousel.length,
    )
  }

  if (!imagesCarousel || imagesCarousel.length === 0) {
    return <div>No images available</div>
  }

  return (
    <div className="carousel">
      <button className="carousel__button__left" onClick={prevImage}>
        <img className="arrow__left" src={Arrowleft} alt="Image prédécente" />
      </button>
      <img
        className="carousel__image"
        src={imagesCarousel[currentIndex]}
        alt="carousel"
      />
      <button className="carousel__button__right" onClick={nextImage}>
        <img className="arrow__right" src={Arrowright} alt="Image suivante" />
      </button>
    </div>
  )
}

export default Carousel

Carousel.propTypes = {
  imagesCarousel: PropTypes.string.isRequired,
}
