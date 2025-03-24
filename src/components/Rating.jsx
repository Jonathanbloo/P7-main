import { FaStar, FaRegStar } from 'react-icons/fa'
import PropTypes from 'prop-types'
import '../styles/rating.css'

function Rating({ rating }) {
  // Convertir le rating en nombre
  const ratingValue = parseInt(rating, 10) // 10 pour le système décimal

  return (
    <div className="rating">
      {/* Génération des étoiles pleines */}
      {[...Array(5)].map((_, index) =>
        index < ratingValue ? (
          <FaStar key={index} className="star" />
        ) : (
          <FaRegStar key={index} className="star empty" />
        ),
      )}
    </div>
  )
}
Rating.propTypes = {
  rating: PropTypes.string.isRequired,
}

export default Rating
