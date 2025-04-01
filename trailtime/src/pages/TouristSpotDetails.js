import React from 'react';
import { useParams } from 'react-router-dom';
import './TouristSpotDetails.css';
import CityWeatherPage from './CityWeatherPage';

const touristSpots = [
  {
    id: 1,
    name: 'Jaipur',
    image: 'https://assets.vogue.in/photos/5ce41ea8b803113d138f5cd2/4:3/w_1440,h_1080,c_limit/Jaipur-Travel-Shopping-Restaurants.jpg',
    description: 'Known as the Pink City, Jaipur is famous for its rich history and stunning architecture.',
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
    description: 'Famous for its stunning beaches and vibrant nightlife.',
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
    description: 'One of the oldest inhabited cities, known for its spiritual significance.',
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
    description: 'Famous for its royal heritage and grand palaces.',
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
    description: 'Known for its tranquil backwaters and lush greenery.',
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
    description: 'Famous for its tea plantations and breathtaking views of the Himalayas.',
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

const TouristSpotDetails = () => {
  const { id } = useParams();
  const spot = touristSpots.find(spot => spot.id === parseInt(id));

  if (!spot) {
    return <div>Spot not found.</div>;
  }

  return (
    <div className="tourist-spot-details">
      <h1>{spot.name}</h1>
      <img src={spot.image} alt={spot.name} className="detail-image" />
      <p><strong>Description:</strong> {spot.description}</p>
      <p><strong>Local Food:</strong> {spot.localFood}</p>
      <p><strong>Weather:</strong> {spot.weather}</p>
      <CityWeatherPage city={spot.name} />
      <p><strong>Best Time to Visit:</strong> {spot.bestTimeToVisit}</p>
      <p><strong>Things to Do:</strong></p>
      <ul>
        {spot.thingsToDo.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default TouristSpotDetails;
