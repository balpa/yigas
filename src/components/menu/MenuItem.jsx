import '../../App.css'
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function MenuItem({ name }) {
  const [pathName, setPathName] = useState('')

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setPathName(window.location.pathname.replace('/', '')), 500)
  }, [])

  return (
    <div
      className={`menu-item ${pathName === name.toLowerCase() ? 'menu-bold' : ''}`}
      onClick={() => navigate('/' + name.toLowerCase())}>{ name }</div>
  )
}

export default MenuItem

MenuItem.propTypes = {
  name: PropTypes.string
}