import Image from "next/image";
import { aqiText, getTime } from "@/utils/helpers";

export default function Highlights({ currentWeather, airPollution }) {
  if (!currentWeather || !airPollution) return null;

  const {
    sys: { sunrise: sunriseUnixUTC, sunset: sunsetUnixUTC },
    main: { pressure, humidity },
    wind: { speed: windSpeed },
    visibility,
    timezone,
  } = currentWeather;

  const [
    {
      main: { aqi },
      components: { no2, o3, so2, pm2_5 },
    },
  ] = airPollution.list;

  return (
    <section className="section highlights" aria-labelledby="highlights-label">
      <div className="card card-lg">
        <h2 className="title-2" id="highlights-label">
          Today Highlights
        </h2>
        <div className="highlight-list">
          <div className="card card-sm highlight-card one">
            <h3 className="title-3">Air Quality Index</h3>
            <div className="wrapper">
              <span className="m-icon">
                <Image
                  src="/images/wind.png"
                  width={64}
                  height={64}
                  className="weather-icon"
                  alt="wind"
                  weather-icon-id="wind"
                />
              </span>
              <ul className="card-list">
                <li className="card-item">
                  <p className="title-1">{pm2_5.toPrecision(3)}</p>
                  <p className="label-1">
                    PM<sub>2.5</sub>
                  </p>
                </li>
                <li className="card-item">
                  <p className="title-1">{so2.toPrecision(3)}</p>
                  <p className="label-1">
                    SO<sub>2</sub>
                  </p>
                </li>
                <li className="card-item">
                  <p className="title-1">{no2.toPrecision(3)}</p>
                  <p className="label-1">
                    NO<sub>2</sub>
                  </p>
                </li>
                <li className="card-item">
                  <p className="title-1">{o3.toPrecision(3)}</p>
                  <p className="label-1">
                    O<sub>3</sub>
                  </p>
                </li>
              </ul>
            </div>
            <span
              className={`badge aqi-${aqi} label-${aqi}`}
              title={aqiText[aqi].message}
            >
              {aqiText[aqi].level}
            </span>
          </div>

          <div className="card card-sm highlight-card two">
            <h3 className="title-3">Sunrise & Sunset</h3>
            <div className="wrapper">
              <div className="card-list">
                <div className="card-item">
                  <span className="m-icon">
                    <Image
                      src="/images/sunrise.png"
                      width={64}
                      height={64}
                      className="weather-icon"
                      alt="sunrise"
                      weather-icon-id="sunrise"
                    />
                  </span>
                  <div className="label-1">
                    <p className="label-1">Sunrise</p>
                    <p className="title-1">
                      {getTime(sunriseUnixUTC, timezone)}
                    </p>
                  </div>
                </div>
                <div className="card-item">
                  <span className="m-icon">
                    <Image
                      src="/images/sunset.png"
                      width={64}
                      height={64}
                      className="weather-icon"
                      alt="sunset"
                      weather-icon-id="sunset"
                    />
                  </span>
                  <div className="label-1">
                    <p className="label-1">Sunset</p>
                    <p className="title-1">
                      {getTime(sunsetUnixUTC, timezone)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card card-sm highlight-card">
            <h3 className="title-3">Humidity</h3>
            <div className="wrapper">
              <span className="m-icon">
                <Image
                  src="/images/humidity.png"
                  width={64}
                  height={64}
                  className="weather-icon"
                  alt="humidity"
                  weather-icon-id="humidity"
                />
              </span>
              <p className="title-1">
                {humidity}
                <sub>%</sub>
              </p>
            </div>
          </div>

          <div className="card card-sm highlight-card">
            <h3 className="title-3">Pressure</h3>
            <div className="wrapper">
              <span className="m-icon">
                <Image
                  src="/images/pressure.png"
                  width={64}
                  height={64}
                  className="weather-icon"
                  alt="pressure"
                  weather-icon-id="pressure"
                />
              </span>
              <p className="title-1">
                {pressure} <sub>mBar</sub>
              </p>
            </div>
          </div>

          <div className="card card-sm highlight-card">
            <h3 className="title-3">Visibility</h3>
            <div className="wrapper">
              <span className="m-icon">
                <Image
                  src="/images/visibility.png"
                  width={64}
                  height={64}
                  className="weather-icon"
                  alt="visibility"
                  weather-icon-id="visibility"
                />
              </span>
              <p className="title-1">
                {visibility / 1000} <sub>KM</sub>
              </p>
            </div>
          </div>

          <div className="card card-sm highlight-card">
            <h3 className="title-3">Wind</h3>
            <div className="wrapper">
              <span className="m-icon">
                <Image
                  src="/images/windsock.png"
                  width={64}
                  height={64}
                  className="weather-icon"
                  alt="wind"
                  weather-icon-id="windsock"
                />
              </span>
              <p className="title-1">{windSpeed.toPrecision(2)} km/h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
