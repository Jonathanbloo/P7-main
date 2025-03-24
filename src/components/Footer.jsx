import '../styles/footer.css'
import PropTypes from 'prop-types';

function Footer({logofooter, textfooter}) {
    return(
        <div className="footer">
            <img src={logofooter} alt="logo Kasa" />
            <div className='footer__text'>
                {`${textfooter}`}
            </div>

        </div>
    )
}

Footer.propTypes = {
    logofooter: PropTypes.string.isRequired,
    textfooter: PropTypes.string.isRequired,
};

export default Footer;