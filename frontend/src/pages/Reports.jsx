import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Reports = () => {
    const[ reportList, setReportList] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    let user = JSON.parse(localStorage.getItem('donateUser'));
    const navigate = useNavigate();
    useEffect(() => {
        if(user === null) {
            navigate('/');    
        }else if(user[0].role === 'user') {
            navigate('/');
        }else {
            setIsAuthenticated(true);
        }
    },[user, navigate]);

    const logout = () => {
        localStorage.removeItem('donateUser');
        navigate('/');
    }

    const handleHomeTab = () => {
        navigate('/');
    }


    const [selectedPage, setSelectedPage] = useState('');

    const handlePageChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedPage(selectedValue);

        // Redirect to the selected page
        if (selectedValue !== "") {
            navigate(selectedValue);
        }
    };

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
    {isAuthenticated && (
        <>
        <div className="admin-page">
                <div className="main-header">
                    <nav>
                        <div className="logo">
                            <h2>Blood Connect</h2>
                        </div>
                        <div className="select-page">
                            <select name="page" id="page" value={selectedPage} onChange={handlePageChange}>
                                <option value="">Select a Page</option>
                                <option value='/reportsPage'>Reports</option>
                                <option value='/usersPage'>Users Page</option>
                                <option value="/questionsPage">Questions Page</option>
                            </select>
                        </div>
                        <div className="links">
                            <button onClick={handleHomeTab}>Home</button>
                        </div>
                        <div className="links">
                            <button onClick={logout}>Logout</button>
                        </div>
                    </nav>
                </div>
                <div className="admin-page-content">
                    <h1>Reports</h1>
                    <div className="users-table">
                        <table>
                            <thead>
                                <th>Reporter Name</th>
                                <th>Report Text</th>
                                <th>Report file</th>
                            </thead>
                            <tbody>
                                {reportList.map(report => (
                                    <tr key={report.report_id}>
                                        <td>{report.report_name}</td>
                                        <td>{report.report_text}</td>
                                        <td>
                                        <a href={URL.createObjectURL(new Blob([new Uint8Array(report.report_file.data)],{type: 'image/jpeg', }))}
                                        download={URL.createObjectURL(new Blob([new Uint8Array(report.report_file.data)],{type: 'image/jpeg', }))}>
                                            Download
                                        </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )}
    </>
    
  )
}

export default Reports