import { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import '../styles/collapse.css'
import '../main.css'

function Collapse({ title, text }) {
  const [isActive, setIsActive] = useState(false)

  const toggleCollapse = () => {
    setIsActive(!isActive)
  }

  return (
    <div className="collapse__item">
      <button className="collapse-button" onClick={toggleCollapse}>
        {title}
        <FontAwesomeIcon
          className={`arrow ${isActive ? 'arrow-open' : 'arrow-closed'}`}
          icon={faChevronDown}
        />
      </button>
      <div className={`collapse-content ${isActive ? 'show' : 'hide'}`}>
        {text}
      </div>
    </div>
  )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.node.isRequired,
}
export default Collapse
