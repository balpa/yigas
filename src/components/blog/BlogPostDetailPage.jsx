import '../../App.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
//import { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useLocation } from "react-router-dom";

function BlogPostDetailPage() {
  const location = useLocation();
  const blogData = location.state;

  const date = new Date(blogData.date).toLocaleString('en-US').split(',')[0]

  return (
    <div className="main-wrapper">
      <Header />
        <div className='blog-post-detail-page-wrapper'>
          <div className='blog-post-detail-page-container'>
            {ReactHtmlParser(blogData.text)}
          </div>
          <div className='blog-post-detail-page-date'>{date}</div>
        </div>
      <Footer />
    </div>
  )
}

export default BlogPostDetailPage