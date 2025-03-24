import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../styles/404.css'

function Error404({ image404, text404, backhome }) {
  const navigate = useNavigate()

  return (
    <div className="page404">
      <img className="image__page404" src={image404} alt="" />
      <p className="oups__page404">{text404}</p>
      <button className="backhome__page404" onClick={() => navigate('/')}>
        {backhome}
      </button>
    </div>
  )
}

Error404.propTypes = {
  image404: PropTypes.string.isRequired,
  text404: PropTypes.string.isRequired,
  backhome: PropTypes.string.isRequired,
}

export default Error404
