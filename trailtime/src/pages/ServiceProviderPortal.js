/*
// pages/ServiceProviderPortal.js
import React, { useState } from 'react';
import axios from 'axios';

const ServiceProviderPortal = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [amenities, setAmenities] = useState('');
  const [message, setMessage] = useState('');
  const [serviceProviderId, setServiceProviderId] = useState(null);
  const serviceProviderId = localStorage.getItem('serviceProviderId'); 

  // Replace with the actual service provider ID after user authentication
  useEffect(() => {
    const id = localStorage.getItem('serviceProviderId');
    if (id) {
      setServiceProviderId(id); // Set the service provider ID on component mount
    } else {
      setMessage('Service provider ID not found. Please log in.');
    }
  }, []);

  const handleAddHotel = async (e) => {
    e.preventDefault();
    const amenitiesArray = amenities.split(',').map(item => item.trim());
    
    try {
      const response = await axios.post('http://localhost:3001/add', {
        name,
        location,
        description,
        imageUrl,
        amenities: amenitiesArray,
        serviceProviderId, // Using dynamic service provider ID
      });
      setMessage(response.data.message);
      
      // Optionally clear the form or redirect after success
      if (response.status === 201) {
        // Clear the form
        setName('');
        setLocation('');
        setDescription('');
        setImageUrl('');
        setAmenities('');
      }
    } catch (error) {
      console.error('Error adding hotel:', error); // Log the error for debugging
      setMessage('Error adding hotel: ' + error.response.data.message || error.message);
    }
  };

  return (
    <div className="service-provider-portal">
      <h1>Add New Hotel</h1>
      <form onSubmit={handleAddHotel}>
        <input 
          type="text" 
          placeholder="Hotel Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Location" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Image URL" 
          value={imageUrl} 
          onChange={(e) => setImageUrl(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Amenities (comma separated)" 
          value={amenities} 
          onChange={(e) => setAmenities(e.target.value)} 
          required 
        />
        <button type="submit">Add Hotel</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ServiceProviderPortal;
*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ServiceProviderPortal = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [amenities, setAmenities] = useState('');
  const [message, setMessage] = useState('');
  const [serviceProviderId, setServiceProviderId] = useState(null);

  useEffect(() => {
    const id = localStorage.getItem('serviceProviderId');
    if (id) {
      setServiceProviderId(id); // Set the service provider ID on component mount
    } else {
      setMessage('Service provider ID not found. Please log in.');
    }
  }, []);

  const handleAddHotel = async (e) => {
    e.preventDefault();
    if (!serviceProviderId) {
      setMessage('No service provider ID available.');
      return;
    }

    const amenitiesArray = amenities.split(',').map(item => item.trim());
    
    try {
      const response = await axios.post('http://localhost:3001/add', {
        name,
        location,
        description,
        imageUrl,
        amenities: amenitiesArray,
        serviceProviderId, // Using the retrieved service provider ID
      });
      setMessage(response.data.message);
      
      // Clear the form on success
      if (response.status === 201) {
        setName('');
        setLocation('');
        setDescription('');
        setImageUrl('');
        setAmenities('');
      }
    } catch (error) {
      console.error('Error adding hotel:', error);
      setMessage('Error adding hotel: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="service-provider-portal">
      <h1>Add New Hotel</h1>
      <form onSubmit={handleAddHotel}>
        <input 
          type="text" 
          placeholder="Hotel Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Location" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Image URL" 
          value={imageUrl} 
          onChange={(e) => setImageUrl(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Amenities (comma separated)" 
          value={amenities} 
          onChange={(e) => setAmenities(e.target.value)} 
          required 
        />
        <button type="submit">Add Hotel</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ServiceProviderPortal;
