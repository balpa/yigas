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
  const [filteredData, setFilteredData] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const submenuClicksInterval = setInterval(() => {
      const submenu = document.querySelector('div.ant-dropdown-menu-submenu')

      if(submenu) { 
        document.querySelectorAll('div.ant-dropdown-menu-submenu > ul > li').forEach(($node) => {
          $node.addEventListener('click', (e) => {
            setFilter(e.target.innerText)
          })
        })
      }
    }, 500)

    return () => clearInterval(submenuClicksInterval)
  }, [])

  useEffect(() => {
    const filtered = blogData.filter((blogPost) => {
      const tags = blogPost.tags && (blogPost.tags.toLowerCase() || {}).split(',')
      return (tags || []).includes(filter.toLowerCase())
    })

    setFilteredData(filtered)
  }, [filter])

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

  const renderPosts = (data) => data.map((data, index) => <BlogPost blogData={data} key={index} />)

  return (
    <div className='blog-content-wrapper'>
        <div className='blog-content-container'>
            {filter && <div className='blog-content-clear-filter' onClick={() => {setFilter('')}}>Clear filter</div>}
            <Dropdown className='blog-dropdown' menu={{items}} onClick={(e) => {console.log(e)}}>
                <a>
                <Space>
                    Filter
                    <DownOutlined />
                </Space>
                </a>
            </Dropdown>
            <div className="blog-posts-container">
              {filteredData.length
              ? renderPosts(filteredData)
              : filter && !filteredData.length ? <div>No data!</div> : renderPosts(blogData)}
            </div>
        </div>
    </div>
  )
}

export default JournalContent