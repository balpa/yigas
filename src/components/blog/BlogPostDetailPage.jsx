import '../../App.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
//import { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useLocation } from "react-router-dom";

function BlogPostDetailPage() {
  const location = useLocation();
  const blogData = location.state;

  return (
    <>
    <div className="main-wrapper">
      <Header />
        <div className='blog-post-detail-page-wrapper'>
          <div className='blog-post-detail-page-container'>
            {ReactHtmlParser(blogData.text)}
          </div>
        </div>
      <Footer />
    </div>
    </>
  )
}

export default BlogPostDetailPage