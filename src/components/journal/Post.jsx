import '../../App.css'
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

function Post({post}) {
  const date = new Date(post.date).toLocaleString('en-US').split(',')[0]
  let clock = new Date(post.date).toLocaleString('en-US').split(',')[1].trim()
  const clockArr = clock.split(' ')
  const amOrPmVal = clockArr[1]
  clock = clockArr[0].slice(0,-3) + ' ' + amOrPmVal


  return (
    <div className='journal-post-wrapper'>
        <div className="journal-post-text">{ReactHtmlParser(post.text)}</div>
        <div className="journal-post-clock">{clock}</div>
        <div className="journal-post-date">{date}</div>
    </div>
  )
}

export default Post

Post.propTypes = {
  post: PropTypes.object,
  index: PropTypes.number
}