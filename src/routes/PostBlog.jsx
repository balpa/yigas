import '../App.css'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase';
import UploadImage from '../components/UploadImage';

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ size: [] }],
    [{ font: [] }],
    [{ align: ["right", "center", "justify"] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    [{ color: ["red", "#785412"] }],
    [{ background: ["red", "#785412"] }]
  ]
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "color",
  "image",
  "background",
  "align",
  "size",
  "font",
  "code-block"
];

function PostBlog() {
  const [blogTitle, setBlogTitle] = useState('')
  const [blogTags, setBlogTags] = useState('')
  const [blogContent, setBlogContent] = useState('')
  const [isPostSent, setIsPostSent] = useState(false)
  const [postButtonText, setPostButtonText] = useState('Post')
  const [blogThumbnailText, setBlogThumbnailText] = useState('')
  const [blogThumbnailImage, setBlogThumbnailImage] = useState('')

  const sendPost = async () => {
      try {
        if (blogTitle !== '' && blogTags !== '') {
          await addDoc(collection(db, 'blog'), {
            text: blogContent,
            title: blogTitle,
            tags: blogTags,
            thumbnailText: blogThumbnailText,
            thumbnailImage: blogThumbnailImage,
            date: Date.now(),
          });
          
          setIsPostSent(true)
          setPostButtonText('Post sent!')
          
          console.log('Document written! ');
        } else {console.log('Title or tag inputs empty')}
      } catch (e) {
        console.error('Error adding document: ', e);
      }
  }

  return (
    <div className="main-wrapper">
      <Header />
      <input className='blog-title-input' type='text' placeholder='title' onChange={(e) => {setBlogTitle(e.target.value)}}></input>
      <input className='blog-tag-input' type='text' placeholder='tags' onChange={(e) => {setBlogTags(e.target.value)}}></input>
      <input className='blog-thumbnail-text-input' type='text' placeholder='thumbnail text' onChange={(e) => {setBlogThumbnailText(e.target.value)}}></input>
      <UploadImage setBlogThumbnailImage={setBlogThumbnailImage}/>
      <div className="quill-wrapper">
        <ReactQuill
          theme="snow"
          modules={modules}
          value={blogContent}
          formats={formats}
          onChange={setBlogContent} />
      </div>
      <button className='post-blog-button' onClick={() => !isPostSent && sendPost()}>{postButtonText}</button>
      <Footer />
    </div>
  )
}

export default PostBlog