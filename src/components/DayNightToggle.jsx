"use client";
import { useState, useEffect } from "react";
import "./DayNightToggle.css";

export default function DayNightToggle() {
  const [night, setNight] = useState(false);

  const handleToggle = () => {
    const newNightState = !night;
    setNight(newNightState);

    // Toggle body class for theme
    if (newNightState) {
      document.body.classList.remove("day-mode");
    } else {
      document.body.classList.add("day-mode");
    }

    // Update weather icons
    updateWeatherIcons(!newNightState);
  };

  // Initialize body class on mount
  useEffect(() => {
    document.body.classList.add("day-mode");
  }, []);

  const updateWeatherIcons = (isNowDay) => {
    // Update weather icons based on theme
    const dataIcons = document.querySelectorAll(
      "img.weather-icon[data-icon-id]",
    );
    dataIcons.forEach((img) => {
      const iconId = img.getAttribute("data-icon-id");
      const newSrc = `/images/weather_icons/${iconId}${isNowDay ? "" : "-1"}.png`;
      img.setAttribute("src", newSrc);
    });

    const weatherIcons = document.querySelectorAll(
      "img.weather-icon[weather-icon-id]",
    );
    weatherIcons.forEach((img) => {
      const iconId = img.getAttribute("weather-icon-id");
      const newSrc = `/images/${iconId}${isNowDay ? "" : "-1"}.png`;
      img.setAttribute("src", newSrc);
    });

    const weatherSmallIcons = document.querySelectorAll(
      "img.weather-small-icon[weather-icon-id]",
    );
    weatherSmallIcons.forEach((img) => {
      const iconId = img.getAttribute("weather-icon-id");
      const newSrc = `/images/${iconId}${isNowDay ? "" : "-1"}.png`;
      img.setAttribute("src", newSrc);
    });
  };

  return (
    <div className={`day-night-toggle ${night ? "night" : ""}`}>
      <div
        className={`toggle-container ${night ? "toggle-container--night" : ""}`}
        onClick={handleToggle}
      >
        {/* Stars */}
        <div className={`stars ${night ? "stars--night" : ""}`}>
          <div className="star star--1"></div>
          <div className="star star--2"></div>
          <div className="star star--3"></div>
          <div className="star star--1b"></div>
          <div className="star star--2b"></div>
          <div className="star star--3b"></div>

          <div className="star-round star-round--1"></div>
          <div className="star-round star-round--2"></div>
          <div className="star-round star-round--3"></div>
          <div className="star-round star-round--4"></div>
          <div className="star-round star-round--5"></div>
          <div className="star-round star-round--6"></div>

          <div className="star-round star-round--1b"></div>
          <div className="star-round star-round--2b"></div>
          <div className="star-round star-round--3b"></div>
          <div className="star-round star-round--4b"></div>
          <div className="star-round star-round--5b"></div>
          <div className="star-round star-round--6b"></div>
        </div>

        {/* Clouds */}
        <div className={`cloud cloud--2 ${night ? "cloud--night" : ""}`}></div>
        <div className={`cloud cloud--1 ${night ? "cloud--night" : ""}`}></div>

        {/* Radiants */}
        <div
          className={`radiant sun-radiant ${night ? "sun-radiant--night" : ""}`}
        ></div>
        <div
          className={`radiant moon-radiant ${night ? "moon-radiant--night" : ""}`}
        ></div>

        {/* Toggle Dot */}
        <div className={`toggle-dot ${night ? "toggle-dot--night" : ""}`}>
          <div
            className={`toggle-crater toggle-crater--1 ${night ? "toggle-crater--night" : ""}`}
          ></div>
          <div
            className={`toggle-crater toggle-crater--2 ${night ? "toggle-crater--night" : ""}`}
          ></div>
          <div
            className={`toggle-crater toggle-crater--3 ${night ? "toggle-crater--night" : ""}`}
          ></div>
        </div>
      </div>
    </div>
  );
}
