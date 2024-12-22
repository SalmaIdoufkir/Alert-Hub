import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Report from "./pages/Report";
import EmergencyPlans from "./pages/EmergencyPlans";
import Weather from "./pages/Weather";
import About from "./pages/About";
import Settings from "./pages/Settings";
import CreateAccount from "./pages/CreateAccount";
import SignIn from "./pages/SignIn";
import NotificationsPage from "./pages/NotificationsPage"; // La page des notifications
import MyProfile from "./pages/MyProfile";
import EditProfile from './pages/EditProfile'; 
import FireGuide from "./pages/fire-guide";

import MyReports from "./pages/MyReports";

const App = () => {
  return (
    <Router>
      <div className="app">
        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/report" element={<Report />} />
            <Route path="/" element={<CreateAccount />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/emergency-plans" element={<EmergencyPlans />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/about" element={<About />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/fire-guide" element={<FireGuide  />} />
            <Route path="/myreports" element={<MyReports  />} />

          </Routes>
        </main>
        
      </div>
    </Router>
  );
};

export default App;
