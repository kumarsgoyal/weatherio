import Image from "next/image";
import { getTime, mps_to_kmh } from "@/utils/helpers";

export default function HourlyForecast({ forecast }) {
  if (!forecast) return null;

  const {
    list: forecastList,
    city: { timezone },
  } = forecast;

  return (
    <section className="section hourly-forecast" aria-label="hourly forecast">
      <h2 className="title-2">Today at</h2>
      <div className="slider-container">
        <ul className="slider-list">
          {forecastList.slice(0, 8).map((data, index) => {
            const {
              dt: dateTimeUnix,
              main: { temp },
              weather,
            } = data;
            const [{ icon, description }] = weather;

            return (
              <li key={`temp-${index}`} className="slider-item">
                <div className="card card-sm slider-card">
                  <p className="body-3">{getTime(dateTimeUnix, timezone)}</p>
                  <Image
                    src={`/images/weather_icons/${icon}.png`}
                    width={48}
                    height={48}
                    alt={description}
                    className="weather-icon"
                    title={description}
                    data-icon-id={icon}
                  />
                  <p className="body-3">{parseInt(temp)}&deg;</p>
                </div>
              </li>
            );
          })}
        </ul>

        <ul className="slider-list">
          {forecastList.slice(0, 8).map((data, index) => {
            const {
              dt: dateTimeUnix,
              wind: { deg: windDirection, speed: windSpeed },
            } = data;

            return (
              <li key={`wind-${index}`} className="slider-item">
                <div className="card card-sm slider-card">
                  <p className="body-3">{getTime(dateTimeUnix, timezone)}</p>
                  <Image
                    src="/images/direction.png"
                    width={48}
                    height={48}
                    alt="wind direction"
                    className="weather-icon"
                    style={{ transform: `rotate(${windDirection - 180}deg)` }}
                    weather-icon-id="direction"
                  />
                  <p className="body-3">
                    {parseInt(mps_to_kmh(windSpeed))} Km/h
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
