import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminTurf from './Pages/AdminTurf';
import Profile from './Pages/Profile';
import Booking from './Pages/Booking';
// import Register from './Pages/Register';
// import Login from './Pages/Login';
import TurfList from './Pages/TurfList';
import Home from './Pages/Home'
import OAuthRedirect from './Pages/OAuthRedirect';
import LoginTest from './Pages/LoginTest';
import { RecoilRoot } from 'recoil';
import TurfCategory from './Components/TurfCategory';

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/turfs" element={<TurfList />} />
          <Route path="/login" element={<LoginTest />} />
          <Route path="/TurfCategory" element={<TurfCategory />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin/turfs" element={<AdminTurf />} />
          <Route path="/oauth-redirect" element={<OAuthRedirect />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>

  );
};

export default App;
