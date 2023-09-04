/* eslint-disable react-hooks/exhaustive-deps */
import '../../App.css'
import Post from './Post';
import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../../firebase';
import { DatePicker, Segmented } from 'antd';
import dayjs from 'dayjs';

function JournalContent() {
  const ONE_DAY_AS_MILLISECONDS = 86400000
  const { RangePicker } = DatePicker;

  const [postsData, setPostsData] = useState([])
  const [dateFilteredPostsData, setDateFilteredPostsData] = useState([])
  const [languageFilteredPostsData, setLanguageFilteredPostsData] = useState([])
  const [isDataFetched, setIsDataFetched] = useState(false)
  const [isFeedEmpty, setIsFeedEmpty] = useState(false)
  const [dates, setDates] = useState(null);
  const [value, setValue] = useState([]);
  const [languageFilter, setLanguageFilter] = useState('BOTH')
  const [postsToRender, setPostsToRender] = useState([])

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

  useEffect(() => {
      let startDate = new Date(((value || [])[0] || {})['$d']).getTime() 
      let endDate = new Date(((value || [])[1] || {})['$d']).getTime()

      startDate = dayjs(startDate).startOf('day')
      endDate = dayjs(endDate).endOf('day')

      filterPostsDataByDate(startDate, endDate)
      checkIsEmptyFeed()
  }, [value])

  useEffect(() => {
    if (languageFilter !== 'BOTH') {
      if ((dateFilteredPostsData || []).length) {
        filterPostsByLanguage(dateFilteredPostsData)
      } else if ((postsData || []).length) {
        filterPostsByLanguage(postsData)
      }
    } else {
      setPostsToRender(postsData)
    }
  }, [languageFilter])

  useEffect(() => {
    if (languageFilteredPostsData.length) {
      if (!dateFilteredPostsData.length){
        setPostsToRender(languageFilteredPostsData)
      } else if (dateFilteredPostsData.length) {
        const data = dateFilteredPostsData.filter((postObj) => {
          let result;
          const filter = languageFilter === 'TR' ? 'turkish' : languageFilter === 'EN' ? 'english' : languageFilter === 'BOTH' ? 'both' : null

          result = postObj.selectedLanguage.toLowerCase() === filter

          return result
        })

        setPostsToRender(data)
      }
    }
  }, [postsData, dateFilteredPostsData, languageFilteredPostsData])

  const filterPostsDataByDate = (startDate, endDate) => {
    const filteredData = postsData && postsData.filter((postObj) => {
      if (!!startDate && !!endDate) {
        return (postObj.date < endDate) && (postObj.date > startDate)
      }
    })

    setDateFilteredPostsData(filteredData)
  }

  const filterPostsByLanguage = (data) => {
    const filteredData = data && data.filter((postObj) => {
      let result;

      if (postObj.selectedLanguage) {
        const filter = languageFilter === 'TR' ? 'turkish' : languageFilter === 'EN' ? 'english' : languageFilter === 'BOTH' ? 'both' : null

        result = postObj.selectedLanguage.toLowerCase() === filter
      } 

      return result
    })

    setLanguageFilteredPostsData(filteredData)
  }

  const checkIsEmptyFeed = () => {
    if ((value || []).length) {
      if (dateFilteredPostsData.length == 0) setIsFeedEmpty(true)
    }
    else setIsFeedEmpty(false)
}
  console.log(isFeedEmpty)

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

  const renderPosts = (data) => data && data.map((post, index) => <Post post={post} key={index}/>)
  console.log(dateFilteredPostsData)
  return (
    <div className='journal-content-wrapper'>
        <div className='journal-content-container'>
          <div className='journal-content-quote'>&quot;A wise man, therefore, proportions his belief to the evidence.&quot;</div>
          <div className='journal-content-title'>my 2 cents</div>
          <Segmented options={['EN', 'BOTH', 'TR']} value={languageFilter} defaultValue='BOTH' onChange={setLanguageFilter} />
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
          {isFeedEmpty ? <div>No data available!</div> : !postsToRender.length ? renderPosts(postsData) : renderPosts(postsToRender)}
          {/* {(dateFilteredPostsData || []).length
            ? renderPosts(dateFilteredPostsData)
            : isFeedEmpty ? <div>No data available!</div> : renderPosts(postsData)} */}
        </div>
    </div>
  )
}

export default JournalContent