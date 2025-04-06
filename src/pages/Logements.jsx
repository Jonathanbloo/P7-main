import Header from '../components/Header.jsx'
import Carousel from '../components/Carousel.jsx'
import Collapse from '../components/Collapses.jsx'
import Footer from '../components/Footer.jsx'
import Logo from '../assets/LOGO.png'
import logoFooter from '../assets/logonoirkasa.png'
import { useParams } from 'react-router-dom'
import data from '../JSON/data.json'
import Tag from '../components/Tag.jsx'
import Rating from '../components/Rating'
import '../main.css'
import '../styles/logement.css'

function Logements() {
  const { id } = useParams() // `id` sera une chaîne extraite de l'URL

  // Recherche du logement dans le fichier JSON par son `id` (qui est une chaîne)
  const logement = data.find((logement) => logement.id === id)

  const tags = logement?.tags.map((tag, index) => {
    return <Tag key={index} tag={tag} />
  })

  // Si aucun logement n'est trouvé, on affiche un message d'erreur
  if (!logement) {
    return <div>Logement non trouvé</div>
  }

  return (
    <>
      <section className="body__section">
        <Header logo={Logo} />
        <Carousel imagesCarousel={logement.pictures} />
        {/* Affichage des détails du logement */}
        <div className="logement__details">
          <div className="logement__description">
            <div className="logement__informations">
              <div>
                <h1 className="logement__title">{logement.title}</h1>
                <p className="logement__location">{logement.location}</p>
              </div>
              <div className="logement__tags">{tags}</div>
            </div>

            <div className="logement__profil__rating">
              <div className="logement__profil">
                <p className="logement__profil__name">
                  <span>{logement.host.name.split(' ')[0]}</span>
                  <span>{logement.host.name.split(' ')[1]}</span>
                </p>
                <img
                  className="logement__profil__photo"
                  src={logement.host.picture}
                  alt="Photo de profil"
                />
              </div>
              <div>
                <Rating rating={logement.rating} />
              </div>
            </div>
          </div>
          <div className="logement__collapses">
            <Collapse
              title={<span className="collapse__title">Description</span>}
              text={
                <span className="collapse__desciption collapse__logement__content">
                  {logement.description}
                </span>
              }
            />

            <Collapse
              title={<span className="collapse__title">Équipements</span>}
              text={
                <div className="collapse__equipements">
                  {logement.equipments.map((equipment, index) => (
                    <div key={index} className="equipement__item">
                      {equipment}
                    </div>
                  ))}
                </div>
              }
            />
          </div>
          {/* Ajoute d'autres informations du logement ici */}
        </div>
      </section>
      <Footer
        logofooter={logoFooter}
        textfooter="© 2020 Kasa. All rights reserved"
      />
    </>
  )
}

export default Logements
