import '../App.css'
import MenuItem from './menu/MenuItem'
//import Logo from './Logo'
import Hamburger from './menu/Hamburger';
import PropTypes from 'prop-types';

function Header({isHomePage}) {
  const aboutMeText = 'Hello. I’m Yiğit, but many call me Yigas (shortened version of my name and surname). I am an English Language and Literature graduate, but I currently work as a data scientist and on my free time I do basketball data analysis.'

  return (
    <>
    <div className="header-menu">
      <div className="desktop-menu-wrapper">
        {/* <Logo /> */}
        <MenuItem name={'About'}/>
        <MenuItem name={'Journal'}/>
        <MenuItem name={'Blog'}/>
        <MenuItem name={'Contact'}/>
      </div>
      <div className="mobile-menu-wrapper">
        {/* <Logo /> */}
        <Hamburger />
      </div>
    </div>
    {isHomePage && <div className="header-about-me-wrapper">
      <div className="header-about-me-left">
        <div className="header-about-me-bold-title">About Me</div>
        <div className="header-about-me-text">{aboutMeText}</div>
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