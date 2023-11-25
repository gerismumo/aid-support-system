import { faHome, faPaperPlane, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import moment from 'moment';
import compromise from 'compromise';
import React, { useCallback, useEffect, useState } from 'react';
import NavBar from '../NavBar';
import './Home.css';

const actions = [
  { icon: faHome, text: 'Home',link:'/' },
  { icon: faPaperPlane, text: 'Send Report', link:'/forminfo' },
];

const HomeInfo = () => {
  const [starCounter, setStarCounter] = useState(0);
  const[ reportList, setReportList] = useState([]);
  const [trendingKeywords, setTrendingKeywords] = useState([]);

  const handleSetStar = () => {
    setStarCounter(starCounter + 1);
  };

  const report_api = `${process.env.REACT_APP_DATABASE_API}/api/reportData`;

  const reportData = useCallback(async() => {
    try {
      const response = await axios.get(report_api);
      setReportList(response.data.data);
    } catch(error) {
      console.error(error);
    }
  }, [report_api]);

  useEffect(() => {
    reportData();
  }, []);

  const extractKeywords = (text) => {
    const doc = compromise(text);
    const keywords = doc.nouns().out('array');
    return keywords;
  };

  const updateTrendingKeywords = () => {
    const keywordCountMap = {};

    reportList.forEach((report) => {
      const keywords = extractKeywords(report.report_text);

      keywords.forEach((keyword) => {
        if (keyword in keywordCountMap) {
          keywordCountMap[keyword]++;
        } else {
          keywordCountMap[keyword] = 1;
        }
      });
    });

    const trendingKeywordsArray = Object.keys(keywordCountMap).map((keyword) => ({
      keyword,
      count: keywordCountMap[keyword],
    }));

    trendingKeywordsArray.sort((a, b) => b.count - a.count);

    setTrendingKeywords(trendingKeywordsArray);
  };

  useEffect(() => {
    updateTrendingKeywords();
  }, [reportList]);

  const formatTimestamp = (timestamp) => {
    const now = moment();
    const postTime = moment(timestamp);
    const diff = now.diff(postTime, 'seconds');
  
    if (diff < 60) {
      return `${diff} seconds ago`;
    } else if (diff < 3600) {
      return `${Math.floor(diff / 60)} minutes ago`;
    } else if (diff < 86400) {
      return `${Math.floor(diff / 3600)} hours ago`;
    } else if (diff < 604800) {
      return `${Math.floor(diff / 86400)} days ago`;
    } else {
      return postTime.format('DD/MM/YYYY');
    }
  };
  



  return (
    <>
    <NavBar />
    <div className="home">
      <div className="home-Container">
        <div className="homeSection">
          <div className="action-section">
            {actions.map((action, index) => (
              <div key={index}>
                <a href={action.link}>
                  <FontAwesomeIcon icon={action.icon} />
                  <h2>{action.text}</h2>
                </a>
              </div>
            ))}
          </div>
          <div className="posts-section">
            {reportList.map((report) => (
              <div key={report.report_id} className="post-card">
                <div className="img-section" style={{ width: '100%', height:'auto' }}>
                    <img
                      className="img"
                      alt="Image"
                      src={URL.createObjectURL(new Blob([new Uint8Array(report.report_file.data)],{type: 'image/jpeg', }))}
                    />
                </div>
                <div className="content-section">
                  <h1 className="title">Reporter: {report.report_name}</h1>
                  <p className="reportinfo">Information: {report.report_text}</p>
                  <p className="dateinfo">Date Posted: {formatTimestamp(report.date)}</p>
                  <FontAwesomeIcon
                    icon={faStar}
                    onClick={handleSetStar}
                    style={{ cursor: 'pointer' }}
                  />{' '}
                  <span className="starCounter">{starCounter}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="trendsSection">
          <div className="trends">
              <p className="trends-heading">Here is What is Happening?</p>
              <p className="trends-subheading">Top Trends</p>
              <ul className="trend-keys">
              {trendingKeywords.map((item, index) => (
                <li key={index}>
                  {item.keyword} ({item.count} posts)
                </li>
              ))}
            </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
   
  );
};

export default HomeInfo;
