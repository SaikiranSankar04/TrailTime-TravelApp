import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import BrowseListings from './pages/BrowseListings'; // Assuming you have this component
import WishLists from './pages/WishLists'; // Assuming you have this component
import CheckAvailability from './pages/CheckAvailability'; // Assuming you have this component
import Register from './pages/Register'; // Assuming you have this component
import TouristSpotDetails from './pages/TouristSpotDetails';
import ServiceProviderRegister from './pages/ServiceProviderRegister';
import ServiceProviderPortal from './pages/ServiceProviderPortal';
import Dashboard from './pages/dashboard'; 
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/browse-listings" element={<BrowseListings />} />
        <Route path="/wishlists" element={<WishLists />} />
        <Route path="/check-availability" element={<CheckAvailability />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:id" element={<TouristSpotDetails />} />
        <Route path="/service-provider-portal" element={<ServiceProviderPortal />} />
        <Route path="/service-provider-register" element={<ServiceProviderRegister />} /> {/* Add the new route */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
