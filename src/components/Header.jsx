"use client";
import { useState } from 'react';
import Image from 'next/image';
import SearchView from './SearchView';
import DayNightToggle from './DayNightToggle';

export default function Header({ onLocationClick }) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <a href="/" className="logo">
          <Image src="/images/logo.png" alt="logo" width={150} height={50} priority />
        </a>

        <SearchView
          isActive={searchActive}
          onToggle={() => setSearchActive(!searchActive)}
        />

        <div className="header-actions">
          <button
            className="icon-btn has-state"
            aria-label="open search"
            onClick={() => setSearchActive(true)}
          >
            <span className="m-icon">search</span>
          </button>

          <button
            onClick={onLocationClick}
            className="btn-primary has-state"
          >
            <span className="m-icon">
              <Image
                src="/images/location.gif"
                alt="Location Icon"
                width={24}
                height={24}
              />
            </span>
            <span className="span">Current Location</span>
          </button>

          <DayNightToggle />
        </div>
      </div>
    </header>
  );
}
