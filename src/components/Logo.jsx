import '../App.css'
import logo from '../assets/logo2.png'
import { motion, useScroll, useTransform } from 'framer-motion'
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Logo({ isHomePage }) {
  const { scrollYProgress } = useScroll();
  const navigate = useNavigate();
  
  const dynamicWidth = useTransform(
    scrollYProgress,
    [0, 0.1],
    [50, 23]
  )
  return (
    <motion.img
      className='logo'
      src={logo}
      style={isHomePage ? {width: dynamicWidth} : {}}
      onClick={() => navigate('/')}
      ></motion.img>
  )
}

export default Logo

Logo.propTypes = {
  isHomePage: PropTypes.bool
}