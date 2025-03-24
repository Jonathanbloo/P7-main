import PropTypes from 'prop-types'
import '../styles/tag.css'

function Tag({ tag }) {
  return <p className="tag">{tag}</p>
}
export default Tag

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
}
