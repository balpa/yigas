import React from 'react';
import ReactDOM from 'react-dom/client'
import Home from './routes/Home';
import Journal from './routes/Journal'
import Contact from './routes/Contact';
import Admin from './routes/Admin';
import Blog from './routes/Blog';
import PostBlog from './routes/PostBlog';
import BlogPostDetailPage from './components/blog/BlogPostDetailPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/journal",
    element: <Journal />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/admin/post-blog",
    element: <PostBlog />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/:blogPostId",
    element: <BlogPostDetailPage />,
  },
  {
    path: "/*",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
