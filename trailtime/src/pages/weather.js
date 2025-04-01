const axios = require('axios');
const API_KEY = '41bffce544f74c0db0291921240211'; // replace with your actual WeatherAPI key



export async function getWeatherData(city) {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
    
    if (!response.ok) {
        const errorData = await response.json(); // Get the error message from the response
        console.error('Error details:', errorData);
        throw new Error('Failed to fetch weather data: ' + errorData.error.message);
    }

    return response.json();
}

export default getWeatherData;