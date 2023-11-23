import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import {useNavigate } from 'react-router-dom';

function FrontPage() {
    

    return (
        <>
        <NavBar />
        <div className="front-page">
           <div className="front-page-content">
                <div className="about">
                    <h1>About Us</h1>
                    <div className="about-content">
                        <div className="about-content-text">
                            <div className="about-image">
                                <img src="images/15185356_5554657.jpg" alt="" />
                            </div>
                            <div className="mission-text">
                                <div className="mission-content-header">
                                    <h1>Mission</h1>
                                </div>
                                
                                <p>
                                    Our mission is to empower communities by providing a unified platform where accurate information, resources, and support converge during crises. We believe in the strength of collective efforts to mitigate the impact of disasters and aid those in need.
                                </p>
                            </div>
                        
                        </div>
                    </div>
                    <div className="vision-content">
                        <div className="vision-content-header">
                            <h1>Vision</h1>
                        </div>
                        <div className="vision-content-text">
                            <p>
                            We envision a world where timely and verified information, coupled with swift responses, can make a significant difference in the face of adversity. Our vision is to create a community-driven space that unites individuals and organizations for effective crisis management.
                            </p>
                        </div>
                    </div>
                </div>
            <div className="services">
                <h1>Services</h1>
                <div className="information-content">
                    <div className="info-content-header">
                        <h1>Information</h1>
                    </div>
                    <div className="info-content-text">
                        <ul>
                            <li><FontAwesomeIcon className='icon' icon={faCheck} /><b>Post Information:</b>Share uplifting and positive stories related to crises. Verified posts contribute to fostering hope and solidarity within the community.</li>
                            <li><FontAwesomeIcon className='icon' icon={faCheck} /><b>Read Information:</b>Access verified information posted by individuals affected by disasters. Transparency and credibility are paramount.</li>
                            <li><FontAwesomeIcon className='icon' icon={faCheck} /><b>Crisis Response:</b>Stay updated with real-time crisis response efforts. Contribute, coordinate, and participate in collective initiatives during emergencies.</li>
                        </ul>
                    </div>
                </div>
                <div className="resources">
                    <div className="resources-header">
                        <h1>Resources Tab - Blood Donation</h1>
                    </div>
                    <div className="resources-text">
                        <p><b>Welcome to Blood Connects:</b> This section is dedicated to facilitating connections between blood donors and recipients. In collaboration with our community, we aim to overcome the challenge of finding donors, especially those with rare blood types. Your act of blood donation is a vital and lifesaving contribution.</p>
                    </div>
                </div>
                <div className="crisis">
                    <div className="crisis-header">
                        <h1>Crisis Response Block</h1>
                    </div>
                    <div className="crisis-text">
                        <p>
                        Stay informed with our dynamic Crisis Response block, providing real-time updates on ongoing crises, urgent needs, and collective response efforts. Engage with the community to actively contribute to crisis response initiatives.
                        </p>
                    </div>
                </div>
            </div>
            <div className="how">
                <h1>How You Can Help</h1>
                <div className="how-content">
                    <div className="how-content-header">
                        <h1>Get Involved</h1>
                    </div>
                    <div className="how-content-text">
                        <p>
                        Whether you're an individual seeking assistance or someone wanting to contribute to crisis response efforts, our platform provides a range of ways to get involved. Explore the tabs, participate in community discussions, and lend a helping hand during times of need.
                        </p>
                    </div>
                </div>
            </div>
            <div className="final-text">
                <h2>Join Us in Building Resilience and Hope!</h2>
            </div>
           </div>
        </div>
        <Footer />
        </>
        
    )
}

export default FrontPage;