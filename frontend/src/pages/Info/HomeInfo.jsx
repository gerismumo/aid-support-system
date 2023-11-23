import { faHome, faPaperPlane, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import NavBar from '../NavBar';
import './Home.css';

const actions = [
  { icon: faHome, text: 'Home' },
  { icon: faPaperPlane, text: 'Send Report' },
];

const cardContent = [
  {
    title: 'Card 1',
    description: 'This is the content of card 1.',
    imageUrl: './images/donatelove.jpg',
  },
  {
    title: 'Card 2',
    description: 'This is the content of card 2.',
    imageUrl: './images/donatelove.jpg',
  },
  {
    title: 'Card 1',
    description: 'This is the content of card 1.',
    imageUrl: './images/donatelove.jpg',
  },
  {
    title: 'Card 1',
    description: 'This is the content of card 1.',
    imageUrl: './images/donatelove.jpg',
  },
  {
    title: 'Card 1',
    description: 'This is the content of card 1.',
    imageUrl: './images/donatelove.jpg',
  },
  {
    title: 'Card 1',
    description: 'This is the content of card 1.',
    imageUrl: './images/donatelove.jpg',
  },
  {
    title: 'Card 1',
    description: 'This is the content of card 1.',
    imageUrl: './images/donatelove.jpg',
  },
  {
    title: 'Card 1',
    description: 'This is the content of card 1.',
    imageUrl: './images/donatelove.jpg',
  },
  {
    title: 'Card 1',
    description: 'This is the content of card 1.',
    imageUrl: './images/donatelove.jpg',
  },
  {
    title: 'Card 1',
    description: 'This is the content of card 1.',
    imageUrl: './images/donatelove.jpg',
  },
  {
    title: 'Card 1',
    description: 'This is the content of card 1.',
    imageUrl: './images/donatelove.jpg',
  },
  {
    title: 'Card 1',
    description: 'This is the content of card 1.',
    imageUrl: './images/donatelove.jpg',
  },
];

const HomeInfo = () => {
  const [starCounter, setStarCounter] = useState(0);

  const handleSetStar = () => {
    setStarCounter(starCounter + 1);
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
                <a href="/locla">
                  <FontAwesomeIcon icon={action.icon} />
                  <h2>{action.text}</h2>
                </a>
              </div>
            ))}
          </div>
          <div className="posts-section">
            {cardContent.map((card, index) => (
              <div key={index} className="post-card">
                <div className="img-section" style={{ width: '20%' }}>
                  <img className="img" alt={card.title} src={card.imageUrl} />
                </div>
                <div className="content-section">
                  <h1 className="title">{card.title}</h1>
                  <p>{card.description}</p>
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
