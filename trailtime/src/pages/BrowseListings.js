import React from 'react';
import './BrowseListings.css'; // Import the associated CSS file
import Navbar from '../Components/Navbar'; // Ensure you have a Navbar component

const touristSpots = [
  {
    id: 1,
    name: 'Jaipur',
    image: 'https://example.com/jaipur.jpg',
    localFood: 'Dal Baati Churma, Gatte ki Sabzi',
    weather: 'Hot summers (April to June), pleasant winters (November to February)',
    bestTimeToVisit: 'October to March',
    thingsToDo: [
      'Visit the Amer Fort',
      'Explore the City Palace',
      'Shop at Johari Bazaar',
      'Visit Hawa Mahal'
    ]
  },
  {
    id: 2,
    name: 'Goa',
    image: 'https://example.com/goa.jpg',
    localFood: 'Fish Curry, Prawn Balchão',
    weather: 'Tropical climate, hot and humid',
    bestTimeToVisit: 'November to February',
    thingsToDo: [
      'Relax on the beaches',
      'Visit Basilica of Bom Jesus',
      'Experience the nightlife at clubs',
      'Try water sports like parasailing'
    ]
  },
  {
    id: 3,
    name: 'Varanasi',
    image: 'https://example.com/varanasi.jpg',
    localFood: 'Kachori Sabzi, Lassi',
    weather: 'Hot summers, cold winters',
    bestTimeToVisit: 'October to March',
    thingsToDo: [
      'Take a boat ride on the Ganges',
      'Visit Kashi Vishwanath Temple',
      'Witness Ganga Aarti at Dashashwamedh Ghat',
      'Explore the narrow lanes and local shops'
    ]
  },
  {
    id: 4,
    name: 'Mysore',
    image: 'https://example.com/mysore.jpg',
    localFood: 'Mysore Pak, Bisi Bele Bath',
    weather: 'Moderate climate, pleasant winters',
    bestTimeToVisit: 'October to March',
    thingsToDo: [
      'Visit Mysore Palace',
      'Explore Chamundi Hill',
      'Shop for Mysore silk',
      'Attend the Dussehra festival'
    ]
  },
  {
    id: 5,
    name: 'Kerala (Backwaters)',
    image: 'https://example.com/kerala.jpg',
    localFood: 'Appam with Stew, Karimeen Pollichathu',
    weather: 'Tropical climate, monsoon from June to August',
    bestTimeToVisit: 'November to February',
    thingsToDo: [
      'Take a houseboat ride',
      'Visit the tea plantations in Munnar',
      'Explore Periyar Wildlife Sanctuary',
      'Enjoy ayurvedic treatments'
    ]
  },
  {
    id: 6,
    name: 'Darjeeling',
    image: 'https://example.com/darjeeling.jpg',
    localFood: 'Momos, Thukpa',
    weather: 'Cool and pleasant, with heavy rains during monsoon',
    bestTimeToVisit: 'March to June, September to December',
    thingsToDo: [
      'Visit Tiger Hill for sunrise views',
      'Explore tea gardens',
      'Take a ride on the Darjeeling Himalayan Railway',
      'Visit the Peace Pagoda'
    ]
  }
];

const BrowseListings = () => {
  return (
    <div className="browse-listings">
      <Navbar />
      <div className="listings-container">
        {touristSpots.map((spot) => (
          <div key={spot.id} className="listing-card" onClick={() => window.open(`/details/${spot.id}`, '_blank')}>
            <img src={spot.image} alt={spot.name} className="listing-image" />
            <h3 className="listing-title">{spot.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseListings;
