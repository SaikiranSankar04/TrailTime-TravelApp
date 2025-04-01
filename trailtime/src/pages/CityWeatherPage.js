// CityWeatherPage.js
import React, { useEffect, useState } from 'react';
import { getWeatherData } from './weather';

const CityWeatherPage = ({ city }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const data = await getWeatherData(city);
                setWeatherData(data);
            } catch (err) {
                setError(err.message);
            }
        };

        if (city) {
            fetchWeather();
        }
    }, [city]);

    if (error) {
        return <div>Error fetching weather data: {error}</div>;
    }

    if (!weatherData) {
        return <div>Loading weather data...</div>;
    }

    return (
        <div>
            <h2>Weather in {city}</h2>
            <p>Temperature: {weatherData.current.temp_c}°C</p>
            <p>Condition: {weatherData.current.condition.text}</p>
            {/* Add more weather details as needed */}
        </div>
    );
};

export default CityWeatherPage;
