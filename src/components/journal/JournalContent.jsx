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
  const [originalDateFilteredPostsData, setOriginalDateFilteredPostsData] = useState([])
  const [languageFilteredPostsData, setLanguageFilteredPostsData] = useState([])
  const [isDataFetched, setIsDataFetched] = useState(false)
  const [isFeedEmpty, setIsFeedEmpty] = useState(false)
  const [dates, setDates] = useState(null);
  const [value, setValue] = useState([]);
  const [languageFilter, setLanguageFilter] = useState('BOTH')

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
  }, [value])

  useEffect(() => {
    if (!((value || []).length) && !((originalDateFilteredPostsData || []).length)) {
      if (languageFilter !== 'BOTH') {
        let languageFilteredData = applyLanguageFilter(postsData)
        
        setLanguageFilteredPostsData(languageFilteredData)
      } else if (languageFilter === 'BOTH') {
        setLanguageFilteredPostsData(postsData)
      }
    } else if ((value || []).length && (originalDateFilteredPostsData || []).length) {
      const filteredData = applyLanguageFilter(originalDateFilteredPostsData)

      setDateFilteredPostsData(filteredData)
    }
  }, [languageFilter])

  useEffect(() => { checkIsEmptyFeed() }, [dateFilteredPostsData])

  const filterPostsDataByDate = (startDate, endDate) => {
    let dateFilteredData = (postsData || []).filter((postObj) => {
      if (!!startDate && !!endDate) {
        return (postObj.date < endDate) && (postObj.date > startDate)
      }
    })

    dateFilteredData = applyLanguageFilter(dateFilteredData)
    setDateFilteredPostsData(dateFilteredData)
    setOriginalDateFilteredPostsData(dateFilteredData)
  }

  const applyLanguageFilter = (data) => {
    return data.filter((postObj) => {
      const lang = postObj.selectedLanguage.toLowerCase()
      const filter = languageFilter === 'TR' ? 'turkish' : languageFilter === 'EN' ? 'english' : languageFilter === 'BOTH' ? 'both' : null

      return filter === 'both' ? true : lang === filter
    })
  }

  const checkIsEmptyFeed = () => {
    if ((value || []).length && !dateFilteredPostsData.length) {
      setIsFeedEmpty(true)
    } else if ((value || []).length && dateFilteredPostsData.length) {
      setIsFeedEmpty(false)
    } else if (!((value || []).length) && languageFilter !== 'BOTH' && !languageFilteredPostsData.length) {
      setIsFeedEmpty(true)
    }
    else setIsFeedEmpty(false)
  }

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
          {isFeedEmpty ? <div>No data available!</div>
            : (dateFilteredPostsData || []).length
            ? renderPosts(dateFilteredPostsData)
            : (languageFilteredPostsData || []).length
            ? renderPosts(languageFilteredPostsData)
            : renderPosts(postsData)}
        </div>
    </div>
  )
}

export default JournalContent