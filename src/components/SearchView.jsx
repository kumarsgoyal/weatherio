"use client";
import { useState, useEffect } from 'react';
import { fetchWeatherData } from '@/utils/helpers';

export default function SearchView({ isActive, onToggle }) {
  const [searchField, setSearchField] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    if (!searchField) {
      setSearchResults([]);
      setSearching(false);
      return;
    }

    setSearching(true);
    const timeoutId = setTimeout(async () => {
      try {
        const locations = await fetchWeatherData('geo', { query: searchField });
        setSearchResults(locations);
        setSearching(false);
      } catch (error) {
        console.error('Search error:', error);
        setSearching(false);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchField]);

  const handleLocationSelect = (lat, lon) => {
    window.location.href = `/?lat=${lat}&lon=${lon}`;
    setSearchField('');
    setSearchResults([]);
    onToggle();
  };

  return (
    <div className={`search-view ${isActive ? 'active' : ''}`}>
      <div className="search-wrapper">
        <input
          type="search"
          name="search"
          className={`search-field ${searching ? 'searching' : ''}`}
          placeholder="search city ..."
          autoComplete="off"
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
        />
        <span className="m-icon leading-icon">search</span>
        <button
          className="icon-btn leading-icon has-state"
          aria-label="close search"
          onClick={onToggle}
        >
          <span className="m-icon">arrow_back</span>
        </button>
      </div>

      {searchResults.length > 0 && (
        <div className="search-result active">
          <ul className="view-list">
            {searchResults.map((location, index) => (
              <li key={index} className="view-item">
                <span className="m-icon">location_on</span>
                <div>
                  <p className="item-title">{location.name}</p>
                  <p className="label-2 item-subtitle">
                    {location.state || ''} {location.country}
                  </p>
                </div>
                <button
                  onClick={() => handleLocationSelect(location.lat, location.lon)}
                  className="item-link has-state"
                  aria-label={`${location.name} weather`}
                >
                  &nbsp;
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
