import '../App.css';
import MenuItem from './menu/MenuItem';
import Logo from './Logo';
import Hamburger from './menu/Hamburger';
import PropTypes from 'prop-types';
import { motion, useScroll, useTransform } from 'framer-motion';
import profilePicture from '../assets/pp.jpg';

function Header({isHomePage}) {
  const { scrollYProgress } = useScroll();

  const aboutMeText = 'Hello. I’m Yiğit, but many call me Yigas (shortened version of my name and surname). I am an English Literature graduate, but I currently work as a data scientist at a private bank in Istanbul and in my free time I analyze and statistically model basketball data.';

  const dynamicHeight = useTransform(
    scrollYProgress,
    [0, 0.1],
    [80, 35]
  )
  const dynamicMargin = useTransform(
    scrollYProgress,
    [0, 0.1],
    [50, 10]
  )


  return (
    <>
    <motion.div style={isHomePage ? {height: dynamicHeight} : {}} className="header-menu">
      <div className="desktop-menu-wrapper">
        <Logo isHomePage={isHomePage}/>
        <MenuItem name={'About'}/>
        <MenuItem name={'Journal'}/>
        <a className='menu-item' href='https://www.my-2-cents.net/'>Blog</a>
        <MenuItem name={'Contact'}/>
      </div>
      <div className="mobile-menu-wrapper">
        <Logo isHomePage={isHomePage}/>
        <Hamburger />
      </div>
    </motion.div>
    {isHomePage && <motion.div style={{marginTop: dynamicMargin, marginBottom: dynamicMargin}} className="header-about-me-wrapper">
      <div className="header-about-me-left">
        <motion.div
          initial={{ translateX: -2000 }}
          animate={{ translateX: 0 }}
          transition={{ type: "spring", stiffness: 40 }}
          className="header-about-me-bold-title">About Me</motion.div>
        <motion.div
          initial={{ translateX: -2000 }}
          animate={{ translateX: 0 }}
          transition={{delay: 0.7, type: "spring", stiffness: 30 }}
          className="header-about-me-text">{aboutMeText}</motion.div>
      </div>
      <motion.div
        initial={{ translateX: 1000 }}
        animate={{ translateX: 0 }}
        transition={{ type: "spring", stiffness: 40 }}
        className="header-about-me-right">
        <img className="header-about-me-right-image" style={{ backgroundImage: `url(${ profilePicture })`}}></img>
        <div className="header-about-me-right-social-media-wrapper">
          <motion.a
            initial={{ translateX: 1000 }}
            animate={{ translateX: 0 }}
            transition={{delay: 0.7, type: "spring", stiffness: 40 }}
            href='https://www.twitter.com/hooplytics_' target='_blank' rel='noreferrer'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg></motion.a>
          <motion.a
            initial={{ translateX: 1000 }}
            animate={{ translateX: 0 }}
            transition={{delay: 0.8, type: "spring", stiffness: 40 }}
            href='https://www.instagram.com/hooplytics' target='_blank' rel='noreferrer'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></motion.a>
          <motion.a
            initial={{ translateX: 1000 }}
            animate={{ translateX: 0 }}
            transition={{delay: 0.9, type: "spring", stiffness: 40 }}
            href='https://www.linkedin.com/in/yigitasik' target='_blank' rel='noreferrer'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></motion.a>
          <motion.a
            initial={{ translateX: 1000 }}
            animate={{ translateX: 0 }}
            transition={{delay: 1, type: "spring", stiffness: 40 }}
            href='https://www.medium.com/@yigas' target='_blank' rel='noreferrer'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 640 512"><path d="M180.5,74.262C80.813,74.262,0,155.633,0,256S80.819,437.738,180.5,437.738,361,356.373,361,256,280.191,74.262,180.5,74.262Zm288.25,10.646c-49.845,0-90.245,76.619-90.245,171.095s40.406,171.1,90.251,171.1,90.251-76.619,90.251-171.1H559C559,161.5,518.6,84.908,468.752,84.908Zm139.506,17.821c-17.526,0-31.735,68.628-31.735,153.274s14.2,153.274,31.735,153.274S640,340.631,640,256C640,171.351,625.785,102.729,608.258,102.729Z"/></svg></motion.a>
          <motion.a
            initial={{ translateX: 1000 }}
            animate={{ translateX: 0 }}
            transition={{delay: 1.1, type: "spring", stiffness: 40 }}
            href='https://www.youtube.com/channel/UCADS7-aZgDNHSmkwvu92aiA' target='_blank' rel='noreferrer'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg></motion.a>
        </div>
      </motion.div>
    </motion.div>}
    </>
  )
}

export default Header

Header.propTypes = {
  isHomePage: PropTypes.bool
}