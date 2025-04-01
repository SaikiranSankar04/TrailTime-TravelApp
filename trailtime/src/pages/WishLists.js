import React, { useState, useEffect } from 'react';
import './WishLists.css';
import axios from 'axios';

const WishLists = () => {
  const [wishLists, setWishLists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWishLists = async () => {
      try {
        const response = await axios.get('http://localhost:3001/wishlists'); // Adjust API endpoint as needed
        setWishLists(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching wish lists:', error);
        setLoading(false);
      }
    };

    fetchWishLists();
  }, []);

  return (
    <div className="wishlists-page">
      <h1>Your Wish Lists</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="wishlists-container">
          {wishLists.length > 0 ? (
            wishLists.map((list) => (
              <div className="wishlist-item" key={list._id}>
                <h2>{list.title}</h2>
                <p>{list.description}</p>
              </div>
            ))
          ) : (
            <p>No wish lists found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default WishLists;
