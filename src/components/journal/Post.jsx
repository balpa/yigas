import '../../App.css'
import PropTypes from 'prop-types';

function Post({post}) {
  const clock = new Date(post.date).toLocaleString('en-US').split(',')[1]
  const date = new Date(post.date).toLocaleString('en-US').split(',')[0]

  return (
    <div className='journal-post-wrapper'>
        <div className="journal-post-text">{post.text}</div>
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