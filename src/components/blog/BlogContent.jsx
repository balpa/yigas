import '../../App.css'
import BlogPost from './BlogPost';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { db } from '../../../firebase'

const items = [
  // {
  //   key: '1',
  //   type: 'group',
  //   label: 'Group title',
  //   children: [
  //     {
  //       key: '1-1',
  //       label: '1st menu item',
  //     },
  //     {
  //       key: '1-2',
  //       label: '2nd menu item',
  //     },
  //   ],
  // },
  {
    key: '1',
    label: 'English',
    children: [
      {
        key: '1-1',
        label: 'Basketball',
      },
      {
        key: '1-2',
        label: 'Behavioral Sciences',
      },
      {
        key: '1-3',
        label: 'Data Science & Analytics',
      },
    ],
  },
  {
    key: '2',
    label: 'Türkçe',
    children: [
      {
        key: '2-1',
        label: 'Basketbol',
      },
      {
        key: '2-2',
        label: 'Davranış Bilimleri',
      },
      {
        key: '2-3',
        label: 'Veri Bilimi & Veri Analitiği',
      },
    ],
  },
];

function JournalContent() {
  const [isDataFetched, setIsDataFetched] = useState(false)
  const [blogData, setBlogData] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      if (!isDataFetched) {
        const querySnapshot = await getDocs(collection(db, "blog"));
        const blogPosts = []
        querySnapshot.forEach((doc) => blogPosts.push(doc.data()));

        sortBlogData(blogPosts)
        setBlogData(blogPosts)
        setIsDataFetched(true)
      }
    }

    fetchPosts()
  }, [])

  const sortBlogData = (arr) => {
    arr.sort((b, a) => {
      var keyA = a.date, keyB = b.date
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
  }

  return (
    <div className='blog-content-wrapper'>
        <div className='blog-content-container'>
            <Dropdown className='blog-dropdown' menu={{items}}>
                <a onClick={(e) => e.preventDefault()}>
                <Space>
                    Filter
                    <DownOutlined />
                </Space>
                </a>
            </Dropdown>
            <div className="blog-posts-container">
              {blogData && blogData.map((data, index) => <BlogPost blogData={data} key={index} />)}
            </div>
        </div>
    </div>
  )
}

export default JournalContent