import '../../App.css'
import ReactHtmlParser from 'react-html-parser';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'

function BlogPost({blogData}) {
  const navigate = useNavigate();

  const openBlogDetailsPage = () => {
    navigate(`/blog/${(blogData.url || blogData.date)}`, {state: blogData});
  }

  return (
    <div className='blog-post-wrapper' onClick={() => openBlogDetailsPage()}>
        <div className='blog-post-title'>{(blogData.title || '')}</div>
        <div className='blog-post-container'>
          <img className='blog-post-thumbnail-image' src={blogData.thumbnailImage}></img>
          <div className='blog-post-thumbnail-text'>{ReactHtmlParser(blogData.thumbnailText)}</div>
        </div>
    </div>
  )
}

export default BlogPost

BlogPost.propTypes = {
  blogData: PropTypes.object,
}