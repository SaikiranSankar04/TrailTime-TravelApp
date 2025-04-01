/*
import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const serviceProviderId = '60d5ec49c3a5f62758e7b0c9'; // Use the logged-in provider's ID
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    description: '',
    imageUrl: '',
    amenities: '',
  });
  const [hotels, setHotels] = useState([]); // Initialize as an empty array

  useEffect(() => {
    // Fetch all hotels for the service provider
    const fetchHotels = async () => {
      try {
        const response = await fetch(`http://localhost:3001/hotels/${serviceProviderId}`);
        const data = await response.json();

        // Ensure `data` is an array
        if (Array.isArray(data)) {
          setHotels(data);
        } else {
          setHotels([]); // Fallback to an empty array if data is not an array
        }
      } catch (error) {
        console.error('Error fetching hotels:', error);
        setHotels([]); // Fallback to an empty array in case of an error
      }
    };
    fetchHotels();
  }, [serviceProviderId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddHotel = async (e) => {
    e.preventDefault();
    const dataToSubmit = { ...formData, serviceProviderId };

    try {
      const response = await fetch('http://localhost:3001/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSubmit),
      });
      if (response.ok) {
        const newHotel = await response.json();
        alert('Hotel added successfully!');
        setFormData({ name: '', location: '', description: '', imageUrl: '', amenities: '' });
        // Refresh hotels
        setHotels([...hotels, newHotel]);
      } else {
        alert('Failed to add hotel. Please try again.');
      }
    } catch (error) {
      console.error('Error adding hotel:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleDeleteHotel = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/hotel/${id}`, { method: 'DELETE' });
      if (response.ok) {
        alert('Hotel deleted successfully!');
        setHotels(hotels.filter(hotel => hotel._id !== id));
      } else {
        alert('Failed to delete hotel. Please try again.');
      }
    } catch (error) {
      console.error('Error deleting hotel:', error);
      alert('An error occurred. Please try again.');
    }
  };

  // Placeholder for updating a hotel
  const handleUpdateHotel = (id) => {
    // Implement update logic here
  };

  return (
    <div className="dashboard">
      <h2>Your Listings</h2>
      <form onSubmit={handleAddHotel}>
        <h3>Add a New Hotel</h3>
        <input type="text" name="name" placeholder="Hotel Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <input type="text" name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} required />
        <input type="text" name="amenities" placeholder="Amenities (comma separated)" value={formData.amenities} onChange={handleChange} />
        <button type="submit">Add Hotel</button>
      </form>

      <h3>Your Hotels</h3>
      <ul>
        {Array.isArray(hotels) && hotels.map(hotel => (
          <li key={hotel._id}>
            <h4>{hotel.name}</h4>
            <p>{hotel.description}</p>
            <button onClick={() => handleUpdateHotel(hotel._id)}>Update</button>
            <button onClick={() => handleDeleteHotel(hotel._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
*/
/*
import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const serviceProviderId = '60d5ec49c3a5f62758e7b0c9'; // Use the logged-in provider's ID
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    description: '',
    imageUrl: '',
    amenities: '',
  });
  const [hotels, setHotels] = useState([]); // Initialize as an empty array

  useEffect(() => {
    // Fetch all hotels for the service provider
    const fetchHotels = async () => {
      try {
        const response = await fetch(`http://localhost:3001/hotel/${serviceProviderId}`);
        const data = await response.json();
        console.log('Fetched hotels data:', data); // Debugging line

        // Ensure `data` is an array
        if (Array.isArray(data)) {
          setHotels(data);
        } else {
          setHotels([]); // Fallback to an empty array if data is not an array
        }
      } catch (error) {
        console.error('Error fetching hotels:', error);
        setHotels([]); // Fallback to an empty array in case of an error
      }
    };
    fetchHotels();
  }, [serviceProviderId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddHotel = async (e) => {
    e.preventDefault();
    const dataToSubmit = { ...formData, serviceProviderId };

    try {
      const response = await fetch('http://localhost:3001/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSubmit),
      });
      if (response.ok) {
        const newHotel = await response.json();
        alert('Hotel added successfully!');
        setFormData({ name: '', location: '', description: '', imageUrl: '', amenities: '' });
        // Refresh hotels
        setHotels([...hotels, newHotel]);
      } else {
        alert('Failed to add hotel. Please try again.');
      }
    } catch (error) {
      console.error('Error adding hotel:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleDeleteHotel = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/hotel/${id}`, { method: 'DELETE' });
      if (response.ok) {
        alert('Hotel deleted successfully!');
        setHotels(hotels.filter(hotel => hotel._id !== id));
      } else {
        alert('Failed to delete hotel. Please try again.');
      }
    } catch (error) {
      console.error('Error deleting hotel:', error);
      alert('An error occurred. Please try again.');
    }
  };

  // Placeholder for updating a hotel
  const handleUpdateHotel = (id) => {
    // Implement update logic here
  };

  return (
    <div className="dashboard">
      <h2>Your Listings</h2>
      <form onSubmit={handleAddHotel}>
        <h3>Add a New Hotel</h3>
        <input type="text" name="name" placeholder="Hotel Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <input type="text" name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} required />
        <input type="text" name="amenities" placeholder="Amenities (comma separated)" value={formData.amenities} onChange={handleChange} />
        <button type="submit">Add Hotel</button>
      </form>

      <h3>Your Hotels</h3>
      {hotels.length > 0 ? (
        <ul>
          {hotels.map(hotel => (
            <li key={hotel._id}>
              <h4>{hotel.name}</h4>
              <img src={hotel.imageUrl} alt={hotel.name} style={{ width: '100px', height: '100px' }} />
              <p>{hotel.description}</p>
              <p><strong>Location:</strong> {hotel.location}</p>
              <p><strong>Amenities:</strong> {hotel.amenities}</p>
              <button onClick={() => handleUpdateHotel(hotel._id)}>Update</button>
              <button onClick={() => handleDeleteHotel(hotel._id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hotels found.</p>
      )}
    </div>
  );
};

export default Dashboard;
*/
import React, { useState, useEffect } from 'react';


const Dashboard = ({ serviceProviderUniqueId }) => { // Pass uniqueId as a prop
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    description: '',
    imageUrl: '',
    amenities: '',
  });
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch(`http://localhost:3001/hotel/${serviceProviderUniqueId}`);
        const data = await response.json();
        if (Array.isArray(data)) {
          setHotels(data);
        } else {
          setHotels([]);
        }
      } catch (error) {
        setHotels([]);
      }
    };
    fetchHotels();
  }, [serviceProviderUniqueId]);
/*
  const handleAddHotel = async (e) => {
    e.preventDefault();
    const dataToSubmit = { ...formData, serviceProviderUniqueId };

    try {
      const response = await fetch('http://localhost:3001/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSubmit),
      });
      if (response.ok) {
        const newHotel = await response.json();
        alert('Hotel added successfully!');
        setFormData({ name: '', location: '', description: '', imageUrl: '', amenities: '' });
        setHotels([...hotels, newHotel]);
      } else {
        alert('Failed to add hotel. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };
  */
  const handleAddHotel = async (e) => {
    e.preventDefault();
    const dataToSubmit = { ...formData, serviceProviderUniqueId }; // Include service provider ID

    try {
        const response = await fetch('http://localhost:3001/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataToSubmit),
        });
        if (response.ok) {
            const newHotel = await response.json();
            alert('Hotel added successfully!');
            setFormData({ name: '', location: '', description: '', imageUrl: '', amenities: '' });
            // Refresh hotels
            setHotels([...hotels, newHotel]);
        } else {
            alert('Failed to add hotel. Please try again.');
        }
    } catch (error) {
        console.error('Error adding hotel:', error);
        alert('An error occurred. Please try again.');
    }
};

  const handleDeleteHotel = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/hotel/${id}`, { method: 'DELETE' });
      if (response.ok) {
        alert('Hotel deleted successfully!');
        setHotels(hotels.filter(hotel => hotel._id !== id));
      } else {
        alert('Failed to delete hotel. Please try again.');
      }
    } catch (error) {
      console.error('Error deleting hotel:', error);
      alert('An error occurred. Please try again.');
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  // Placeholder for updating a hotel
  const handleUpdateHotel = (id) => {
    // Implement update logic here
  };

  return (
    <div className="dashboard">
      <h2>Your Listings</h2>
      <form onSubmit={handleAddHotel}>
        <h3>Add a New Hotel</h3>
        <input type="text" name="name" placeholder="Hotel Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <input type="text" name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} required />
        <input type="text" name="amenities" placeholder="Amenities (comma separated)" value={formData.amenities} onChange={handleChange} />
        <button type="submit">Add Hotel</button>
      </form>

      <h3>Your Hotels</h3>
      {hotels.length > 0 ? (
        <ul>
          {hotels.map(hotel => (
            <li key={hotel._id}>
              <h4>{hotel.name}</h4>
              <img src={hotel.imageUrl} alt={hotel.name} style={{ width: '100px', height: '100px' }} />
              <p>{hotel.description}</p>
              <p><strong>Location:</strong> {hotel.location}</p>
              <p><strong>Amenities:</strong> {hotel.amenities}</p>
              <button onClick={() => handleUpdateHotel(hotel._id)}>Update</button>
              <button onClick={() => handleDeleteHotel(hotel._id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hotels found.</p>
      )}
    </div>
  );
};

export default Dashboard;
