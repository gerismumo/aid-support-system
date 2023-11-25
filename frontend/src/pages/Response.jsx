import React, { useState } from 'react';

import NavBar from './NavBar';
const Response = () => {
  const [emergencyContacts] = useState([
    {
      name: 'Emergency Services',
      number: '911',
    },
    {
      name: 'Local Police',
      number: '123-456-7890',
    },
    {
      name: 'Request Call back',
    }
  ]);

  const handleCall = (number) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <>
    <NavBar />
    <div className='response'>
        <div className="response-content">
            <div className="response-form">
                <h2>Crisis Response</h2>
                <p>In case of an emergency, please contact one of the following numbers:</p>

                <ul>
                    {emergencyContacts.map((contact, index) => (
                    <li key={index}>
                        {contact.name}: {contact.number}
                        <button onClick={() => handleCall(contact.number)}>Call</button>
                    </li>
                    ))}
                </ul>
            </div>
            
        </div>
    </div>
    </>
    
  );
};

export default Response;
