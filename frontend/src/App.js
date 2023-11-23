import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import Donor from './pages/Donor';
import FrontPage from './pages/FrontPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Questions from './pages/Questions';
import Receiver from './pages/Receiver';
import ReceiverQuiz from './pages/ReceiverQuiz';
import Register from './pages/Register';
import Response from './pages/Response';
import HomeInfo from './pages/Info/HomeInfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<FrontPage />} />
        <Route path='/crisisResponse' element={<Response />} />
        <Route path='/bloodDonation' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/donorsPage' element={<Donor />} />
        <Route path='/usersPage' element={<AdminPage />} />
        <Route path='/receiversPage' element={<Receiver />} />
        <Route path='/questionsPage' element={<Questions />} />
        <Route path='/receiverQuestions' element={<ReceiverQuiz />} />
        <Route path='/homeinfo' element={<HomeInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
