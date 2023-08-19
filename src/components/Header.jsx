import '../App.css'
import MenuItem from './menu/MenuItem'
import PropTypes from 'prop-types';
import Logo from './Logo'

function Header({isHomePage}) {
  return (
    <>
    <div className="header-menu">
      <Logo />
      <MenuItem name={'About'}/>
      <MenuItem name={'Journal'}/>
      <MenuItem name={'Blog'}/>
      <MenuItem name={'Contact'}/>
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