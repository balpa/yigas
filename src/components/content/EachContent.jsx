import '../../App.css'
import PropTypes from 'prop-types';

function EachContent({ content }) {
  return (
    <>
    <div className='content-text-wrapper'>
      <div className="content-text-title">{ content.title }</div>
      <div className="content-text-sub">{ content.text }</div>
    </div>
    </>
  )
}

export default EachContent

EachContent.propTypes = {
  content: PropTypes.object
}