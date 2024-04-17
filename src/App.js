import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import Home from './frontend/Pages/Home/Home.js';
import Aboutus from './frontend/Pages/About us/About.jsx';
import Features from './frontend/Pages/Features/Features.jsx';
import Login from './frontend/Pages/Sign-in/Login/Login.jsx';
import SignUp from './frontend/Pages/Sign-in/Sign-up/Sign-up.jsx';
import Dashboard from './frontend/Pages/Dashboard/Dashboard.js';
import CreateRoom from './frontend/Pages/CreateRoom/CreateRoom.jsx';
import Inbox from './frontend/Pages/Inbox/Inbox.jsx';
import UseMessages from './backend/Message/GetMessages.jsx';
import ResetPassword from './frontend/Pages/Sign-in/forgetpassword.jsx';
import { inject } from '@vercel/analytics';


function App(){

  inject(
    {
      id:process.env.VERCEL_ANALYTICS_ID,
      autoTrack:true,
    }
  );
  inject();
  return (
    <>
    <Analytics />
    <Router>
    <Routes >
       <Route path='/' element={<Home />} />
       <Route path='/About' element ={<Aboutus />} />
       <Route path='/Features' element ={<Features />} />
       <Route path='/Login' element={<Login />} />
       <Route path='/Sign-up' element={<SignUp />} />
       <Route path='/Dashboard' element={<Dashboard />} />
       <Route path='/CreateRoom' element={<CreateRoom />} />
       <Route path='/Inbox' element={<Inbox />} />
       <Route path='/GetMessages' element={<UseMessages />} />
       <Route path='/forgetpassword' element={<ResetPassword/>} />

    </Routes>
    </Router>
    </>
  )
}
export default App;