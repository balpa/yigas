import '../../App.css'
import PropTypes from 'prop-types';

function MenuItem({ name }) {
  return (
    <div className='menu-item'>{ name }</div>
  )
}

export default MenuItem

MenuItem.propTypes = {
  name: PropTypes.string
}