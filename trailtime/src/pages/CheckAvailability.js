import React, { useState } from 'react';
import './CheckAvailability.css'; // Ensure you create this CSS file

const CheckAvailability = () => {
  const [accommodations, setAccommodations] = useState([
    { name: 'Mountain Lodge', date: '2024-12-01', time: '14:00', price: '$150 per night' },
    { name: 'Beachside Retreat', date: '2024-12-02', time: '15:00', price: '$200 per night' },
    // Add more mock data as needed
  ]);

  return (
    <div className="check-availability-container">
      <h1>Check Availability</h1>
      <form className="availability-form">
        <label htmlFor="date">Select Date:</label>
        <input type="date" id="date" name="date" />

        <label htmlFor="time">Select Time:</label>
        <input type="time" id="time" name="time" />

        <button type="submit">Check Availability</button>
      </form>
      <div className="accommodation-list">
        <h2>Available Accommodations</h2>
        <ul>
          {accommodations.map((acc, index) => (
            <li key={index}>
              <h3>{acc.name}</h3>
              <p>Date: {acc.date}</p>
              <p>Time: {acc.time}</p>
              <p>Price: {acc.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CheckAvailability;