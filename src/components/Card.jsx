import { useNavigate } from 'react-router-dom'
import Data from '../JSON/data.json'
import '../styles/card.css'

function Card() {
  const navigate = useNavigate()

  return (
    <div className="cards">
      {Data.map((logement) => (
        <div
          className="card"
          key={logement.id}
          onClick={() => navigate(`/logements/${logement.id}`)} // Utilise `logement.id` ici et navigate pour la redirection vers la page
        >
          <img
            className="card__img"
            src={logement.cover}
            alt={logement.title}
            height={80}
            width={80}
          />
          <span className="card__title">{logement.title}</span>
        </div>
      ))}
    </div>
  )
}

export default Card
