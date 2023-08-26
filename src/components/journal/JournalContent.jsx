import '../../App.css'
import Post from './Post';
import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../../firebase';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';

function JournalContent() {
  const ONE_DAY_AS_MILLISECONDS = 86400000
  const { RangePicker } = DatePicker;

  const [postsData, setPostsData] = useState([])
  const [dateFilteredPostsData, setDateFilteredPostsData] = useState([])
  const [isDataFetched, setIsDataFetched] = useState(false)
  const [isFeedEmpty, setIsFeedEmpty] = useState(false)
  const [dates, setDates] = useState(null);
  const [value, setValue] = useState([]);

  useEffect(() => {
      let startDate = new Date(((value || [])[0] || {})['$d']).getTime() 
      let endDate = new Date(((value || [])[1] || {})['$d']).getTime()

      startDate = dayjs(startDate).startOf('day')
      endDate = dayjs(endDate).endOf('day')

      filterPostsDataByDate(startDate, endDate)

      checkIsEmptyFeed()
  }, [value])

  const filterPostsDataByDate = (startDate, endDate) => {
    const filteredData = postsData.filter((postObj) => {
      if (!!startDate && !!endDate) {
        return (postObj.date < endDate) && (postObj.date > startDate)
      }
    })

    setDateFilteredPostsData(filteredData)
  }

  const checkIsEmptyFeed = () => {
    if ((value || []).length) {
      if (!dateFilteredPostsData.length) setIsFeedEmpty(true)
    }
    else setIsFeedEmpty(false)
  }

  useEffect(() => {
    const fetchPosts = async () => {
      if (!isDataFetched) {
        const querySnapshot = await getDocs(collection(db, "posts"));
        const postsArray = [];
        querySnapshot.forEach((doc) => postsArray.push(doc.data()));

        sortPostsData(postsArray);
        setPostsData(postsArray);
        setIsDataFetched(true)
      }
    }
  
    fetchPosts()
  }, [])

  const disabledDate = (current) => {
    if (!dates) return false;

    const startDate = new Date(dates[0]).getTime()
    const now = Date.now()
    const days = (now - startDate) / ONE_DAY_AS_MILLISECONDS

    const tooLate = dates[0] && current.diff(dates[0], 'days') >= days;
    const tooEarly = dates[1] && dates[1].diff(current, 'days') >= 7;

    return !!tooEarly || !!tooLate;
  };

  const onOpenChange = (open) => {
    if (open) setDates([null, null])
    else setDates(null);
  };

  const sortPostsData = (arr) => {
    arr.sort(function(b, a) {
      var keyA = new Date(a.date), keyB = new Date(b.date);
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
  }

  const renderPosts = (data) => data.map((post, index) => <Post post={post} key={index}/>)

  return (
    <div className='journal-content-wrapper'>
        <div className='journal-content-container'>
          <div className='journal-content-quote'>&quot;A wise man, therefore, proportions his belief to the evidence.&quot;</div>
          <div className='journal-content-title'>my 2 cents</div>
          <div className='journal-content-filter-wrapper'>
            <div className='journal-content-date-filter-wrapper'>
              <RangePicker
                value={dates || value}
                disabledDate={disabledDate}
                onCalendarChange={(val) => setDates(val)}
                onChange={(val) => setValue(val)}
                onOpenChange={onOpenChange}
                changeOnBlur
              />
            </div>
          </div>
          {dateFilteredPostsData.length
            ? renderPosts(dateFilteredPostsData)
            : isFeedEmpty ? <div>No data available!</div> : renderPosts(postsData)}
        </div>
    </div>
  )
}

export default JournalContent