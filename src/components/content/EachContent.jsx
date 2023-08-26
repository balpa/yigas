import '../../App.css'
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

function EachContent({ content }) {
  return (
    <>
    <div className='content-text-wrapper'>
      <div className="content-text-title">{ content.title }</div>
      <div className="content-text-sub">{ ReactHtmlParser(content.text) }</div>
    </div>
    </>
  )
}

export default EachContent

EachContent.propTypes = {
  content: PropTypes.object
}