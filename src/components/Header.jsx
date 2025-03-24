import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
import '../styles/header.css'

function Header({ logo }) {
    return (
        <div className='header'>
            <img src={logo} alt="Logo kasa" />
            <nav className='header__nav'>
                <NavLink to="/" className={({ isActive }) => isActive ? "nav__link active-link" : "nav__link"} >Accueil</NavLink>
                <NavLink to="/apropos" className={({ isActive }) => isActive ? "nav__link active-link" : "nav__link"} >A propos</NavLink>
            </nav>
        </div>
    )
}

Header.propTypes = {
    logo: PropTypes.string.isRequired,
};

export default Header;