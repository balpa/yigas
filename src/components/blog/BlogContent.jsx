import '../../App.css'
import BlogPost from './BlogPost';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const items = [
  {
    key: '1',
    type: 'group',
    label: 'Group title',
    children: [
      {
        key: '1-1',
        label: '1st menu item',
      },
      {
        key: '1-2',
        label: '2nd menu item',
      },
    ],
  },
  {
    key: '2',
    label: 'sub menu',
    children: [
      {
        key: '2-1',
        label: '3rd menu item',
      },
      {
        key: '2-2',
        label: '4th menu item',
      },
    ],
  },
];

function JournalContent() {

  return (
    <div className='blog-content-wrapper'>
        <div className='blog-content-container'>
            <Dropdown className='blog-dropdown' menu={{items}}>
                <a onClick={(e) => e.preventDefault()}>
                <Space>
                    Topics
                    <DownOutlined />
                </Space>
                </a>
            </Dropdown>
            <div className="blog-posts-container">
                <BlogPost />
                <BlogPost />
                <BlogPost />
                <BlogPost />
                <BlogPost />
            </div>
        </div>
    </div>
  )
}

export default JournalContent