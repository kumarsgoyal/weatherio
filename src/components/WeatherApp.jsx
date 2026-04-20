"use client";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from './Header';
import CurrentWeather from './CurrentWeather';
import Highlights from './Highlights';
import HourlyForecast from './HourlyForecast';
import ForecastSection from './ForecastSection';
import { fetchWeatherData } from '@/utils/helpers';

export default function WeatherApp() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [weatherData, setWeatherData] = useState({
    current: null,
    location: null,
    airPollution: null,
    forecast: null
  });

  const loadWeather = async (lat, lon) => {
    setLoading(true);
    setError(false);

    try {
      const [currentWeather, reverseGeo, airPollution, forecast] = await Promise.all([
        fetchWeatherData('current', { lat, lon }),
        fetchWeatherData('reverse', { lat, lon }),
        fetchWeatherData('air', { lat, lon }),
        fetchWeatherData('forecast', { lat, lon })
      ]);

      setWeatherData({
        current: currentWeather,
        location: reverseGeo[0],
        airPollution,
        forecast
      });
      setLoading(false);
    } catch (err) {
      console.error('Error loading weather:', err);
      setError(true);
      setLoading(false);
    }
  };

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          window.location.href = `/?lat=${latitude}&lon=${longitude}`;
        },
        (error) => {
          console.error('Geolocation error:', error);
          alert('Unable to get your location. Please search for a city instead.');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  useEffect(() => {
    const lat = searchParams.get('lat');
    const lon = searchParams.get('lon');

    if (lat && lon) {
      loadWeather(lat, lon);
    } else {
      loadWeather('28.6139', '77.2090');
    }
  }, [searchParams]);

  if (error) {
    return (
      <>
        <Header onLocationClick={handleCurrentLocation} />
        <section className="error-content" style={{ display: 'flex' }}>
          <h2 className="heading">Looks like you&apos;re lost</h2>
          <p className="body-1">404</p>
          <a href="/" className="btn-primary">
            <span className="span">Go Home</span>
          </a>
        </section>
      </>
    );
  }

  return (
    <>
      <Header onLocationClick={handleCurrentLocation} />
      <main>
        <article className={`container ${!loading ? 'fade-in' : ''}`}>
          <div className="content-left">
            <CurrentWeather
              data={weatherData.current}
              location={weatherData.location}
            />
            <ForecastSection forecast={weatherData.forecast} />
          </div>
          <div className="content-right">
            <Highlights
              currentWeather={weatherData.current}
              airPollution={weatherData.airPollution}
            />
            <HourlyForecast forecast={weatherData.forecast} />
          </div>
          {loading && (
            <div className="loading" style={{ display: 'grid' }}>
              Loading...
            </div>
          )}
        </article>
      </main>
    </>
  );
}
