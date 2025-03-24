import PropTypes from 'prop-types'; // Importer PropTypes
import '../styles/banner.css'

function Banner({ imageHome, titleHome }) {
    return(
        <div className="banner" 
            style={{
                backgroundImage:`linear-gradient(0deg, rgba(0,0,0,0.60) 0%, rgba(0,0,0, 0.60) 100%),url(${imageHome})`,

            }}
        >
            <div className='banner__title'>
            {`${titleHome}`}

            </div>
            
        </div>
    )
    
}
Banner.propTypes = {
    imageHome: PropTypes.string.isRequired, // imageHome est une chaîne et est requis
    titleHome: PropTypes.string.isRequired,
};

export default Banner;