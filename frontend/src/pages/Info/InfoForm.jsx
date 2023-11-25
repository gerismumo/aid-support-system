import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar';
import './Post.css';

const InfoForm = () => {

  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    report: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('report', formData.report);
      formDataToSend.append('file', formData.file);

      console.log(formDataToSend);
      
      const report_api = `${process.env.REACT_APP_DATABASE_API}/api/reportInfo`;

      const response = await axios.post(report_api, formDataToSend);

      console.log('Report submitted successfully:', response.data);
      navigate('/');
    } catch (error) {
      console.error('Error submitting report:', error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="info-form">
        <div className="post-inform">
          <div className="post">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Report's name"
                value={formData.name}
                onChange={handleChange}
              />
              <textarea
                name="report"
                cols="30"
                rows="10"
                value={formData.report}
                onChange={handleChange}
              ></textarea>
              <input type="file" name="file" onChange={handleChange} />
              <button type="submit">Submit Report</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoForm;
