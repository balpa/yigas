import '../App.css'
import MenuItem from './menu/MenuItem'
import Logo from './Logo'
import Hamburger from './menu/Hamburger';
import PropTypes from 'prop-types';

function Header({isHomePage}) {
  return (
    <>
    <div className="header-menu">
      <div className="desktop-menu-wrapper">
        <Logo />
        <MenuItem name={'About'}/>
        <MenuItem name={'Journal'}/>
        <MenuItem name={'Blog'}/>
        <MenuItem name={'Contact'}/>
      </div>
      <div className="mobile-menu-wrapper">
        <Logo />
        <Hamburger />
      </div>
    </div>
    {isHomePage && <div className="header-about-me-wrapper">
      <div className="header-about-me-left">
        <div className="header-about-me-bold-title">About Me</div>
        <div className="header-about-me-text">HEY AMIGSDFGDFSGDFSGD</div>
      </div>
      <div className="header-about-me-right"></div>
    </div>}
    </>
  )
}

export default Header

Header.propTypes = {
  isHomePage: PropTypes.bool
}