import '../../App.css'
import ReactHtmlParser from 'react-html-parser';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'

function BlogPost({blogData}) {
  const navigate = useNavigate();

  const openBlogDetailsPage = () => {
    navigate(`/blog/${(blogData.title || blogData.date)}`, {state: blogData});
  }

  return (
    <div className='blog-post-wrapper' onClick={() => openBlogDetailsPage()}>
        <div className='blog-post-title'>{(blogData.title || '')}</div>
        <div className='blog-post-container'>
          {ReactHtmlParser(blogData.text)}
        </div>
    </div>
  )
}

export default BlogPost

BlogPost.propTypes = {
  blogData: PropTypes.object,
}