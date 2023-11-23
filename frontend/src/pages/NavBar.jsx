import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();

    const [openInfo, setOpenInfo] = useState(false);
    const [openResources, setOpenResources] = useState(false);

    const handleOpenInfo = () => {
        setOpenInfo(!openInfo);
        setOpenResources(false);
    }

    const handleOpenResource = () => {
        setOpenResources(!openResources);
        setOpenInfo(false);
    }

    const handleOpenDonation = () => {
        navigate('/bloodDonation')
    }


    const handleCrisisClick = () => {
        navigate('/crisisResponse');
    }
  return (
    <div className='navbar'>
        <div className="header ">
                <nav>
                    <div className="logo">
                        <h2>Crisis Aid System</h2>
                    </div>
                    <div className="links-account">
                        <div className="links">
                            <button onClick={handleCrisisClick}>Crisis Response</button>
                        </div>
                        <div className="donate">
                            <div className="information-tab" onClick={handleOpenInfo}>
                                <button>Information</button>
                                {openInfo ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} /> }
                            </div>
                           <div className="resources-tab">
                                <button onClick={handleOpenResource}>Resources</button>
                                {openResources ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} /> }
                           </div>
                        </div>
                    </div>
                </nav>
            </div>
            {openInfo && (
                <>
                    <div className="accounts">
                        <button>Post Info</button>
                        <button>Read Info</button>
                    </div>
                </>
            )}

            {openResources && (
                <>
                <div className="accounts">
                    <button onClick={handleOpenDonation}>Blood Donation</button>
                </div>
                </>
            )

            }
                
    </div>
  )
}

export default NavBar
