import '../../App.css'
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function MenuItem({ name }) {
  const navigate = useNavigate();

  return (
    <div className='menu-item' onClick={() => navigate('/' + name.toLowerCase())}>{ name }</div>
  )
}

export default MenuItem

MenuItem.propTypes = {
  name: PropTypes.string
}