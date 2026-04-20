import Image from "next/image";
import { getDate } from "@/utils/helpers";

export default function CurrentWeather({ data, location }) {
  if (!data) return null;

  const {
    weather,
    dt: dateUnix,
    main: { temp },
    timezone,
  } = data;

  const [{ description, icon }] = weather;

  return (
    <section className="section current-weather" aria-label="current weather">
      <div className="card card-lg current-weather-card">
        <h2 className="title-2 card-title">Now</h2>
        <div className="weapper">
          <p className="heading">
            {parseInt(temp)}&deg;<sup>c</sup>
          </p>
          <Image
            src={`/images/weather_icons/${icon}.png`}
            width={64}
            height={64}
            alt={description}
            className="weather-icon"
            data-icon-id={icon}
          />
        </div>
        <p className="body-3">{description}</p>
        <ul className="meta-list">
          <li className="meta-item">
            <span className="m-icon">
              <Image
                src="/images/calendar.png"
                className="weather-small-icon"
                width={20}
                height={20}
                alt="calendar"
                weather-icon-id="calendar"
              />
            </span>
            <p className="title-3 meta-text">{getDate(dateUnix, timezone)}</p>
          </li>
          <li className="meta-item">
            <span className="m-icon">
              <Image
                src="/images/location.png"
                className="weather-small-icon"
                width={20}
                height={20}
                alt="location"
                weather-icon-id="location"
              />
            </span>
            <p className="title-3 meta-text">
              {location
                ? `${location.name}, ${location.country}`
                : "Loading..."}
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
