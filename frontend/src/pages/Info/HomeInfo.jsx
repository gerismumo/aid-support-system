import { faHome, faPaperPlane, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import NavBar from '../NavBar';
import './Home.css';

const actions = [
  { icon: faHome, text: 'Home',link:'/' },
  { icon: faPaperPlane, text: 'Send Report', link:'/forminfo' },
];

// const cardContent = [
//   {
//     title: 'Card 1',
//     description: 'This is the content of card 1.',
//     imageUrl: './images/donatelove.jpg',
//   },
//   {
//     title: 'Card 2',
//     description: 'This is the content of card 2.',
//     imageUrl: './images/donatelove.jpg',
//   },
//   {
//     title: 'Card 1',
//     description: 'This is the content of card 1.',
//     imageUrl: './images/donatelove.jpg',
//   },
//   {
//     title: 'Card 1',
//     description: 'This is the content of card 1.',
//     imageUrl: './images/donatelove.jpg',
//   },
//   {
//     title: 'Card 1',
//     description: 'This is the content of card 1.',
//     imageUrl: './images/donatelove.jpg',
//   },
//   {
//     title: 'Card 1',
//     description: 'This is the content of card 1.',
//     imageUrl: './images/donatelove.jpg',
//   },
//   {
//     title: 'Card 1',
//     description: 'This is the content of card 1.',
//     imageUrl: './images/donatelove.jpg',
//   },
//   {
//     title: 'Card 1',
//     description: 'This is the content of card 1.',
//     imageUrl: './images/donatelove.jpg',
//   },
//   {
//     title: 'Card 1',
//     description: 'This is the content of card 1.',
//     imageUrl: './images/donatelove.jpg',
//   },
//   {
//     title: 'Card 1',
//     description: 'This is the content of card 1.',
//     imageUrl: './images/donatelove.jpg',
//   },
//   {
//     title: 'Card 1',
//     description: 'This is the content of card 1.',
//     imageUrl: './images/donatelove.jpg',
//   },
//   {
//     title: 'Card 1',
//     description: 'This is the content of card 1.',
//     imageUrl: './images/donatelove.jpg',
//   },
// ];


const HomeInfo = () => {
  const [starCounter, setStarCounter] = useState(0);

  const handleSetStar = () => {
    setStarCounter(starCounter + 1);
  };

  const[ reportList, setReportList] = useState([]);

  const report_api = `${process.env.REACT_APP_DATABASE_API}/api/reportData`;

  const reportData = useCallback(async() => {
    try {
      const response = await axios.get(report_api);
      // console.log('response',response.data.data);
      setReportList(response.data.data);
    } catch(error) {
      console.error(error);
    }
  }, [report_api]);

  useEffect(() => {
    reportData();
  }, []);
    console.log('reportList',reportList);
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
                  <h1 className="title">User: {report.report_name}</h1>
                  <p>ReportInfo: {report.report_text}</p>
                  <FontAwesomeIcon
                    icon={faStar}
                    onClick={handleSetStar}
                    style={{ cursor: 'pointer', color: 'white' }}
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
            </div>
          </div>
        </div>
      </div>
    </div>
     {/* <Footer /> */}
    </>
   
  );
};

export default HomeInfo;
