import Image from "next/image";
import { monthNames, weekDayNames } from "@/utils/helpers";

export default function ForecastSection({ forecast }) {
  if (!forecast) return null;

  const { list: forecastList } = forecast;

  const dailyMap = new Map();

  for (const data of forecastList) {
    const dateKey = data.dt_txt.split(" ")[0];
    const currentHour = new Date(data.dt_txt).getHours();
    const hourDiff = Math.abs(currentHour - 12);

    if (
      !dailyMap.has(dateKey) ||
      hourDiff <
        Math.abs(new Date(dailyMap.get(dateKey).dt_txt).getHours() - 12)
    ) {
      dailyMap.set(dateKey, data);
    }
  }

  const dailyForecasts = Array.from(dailyMap.values());

  return (
    <section className="section forecast" aria-labelledby="forecast-label">
      <h2 className="title-2" id="forecast-label">
        6 Days Forecast
      </h2>
      <div className="card card-lg forecast-card">
        <ul>
          {dailyForecasts.map((data, index) => {
            const {
              main: { temp_max },
              weather,
              dt_txt,
            } = data;

            const [{ icon, description }] = weather;
            const date = new Date(dt_txt);

            return (
              <li key={index} className="card-item">
                <div className="icon-wrapper">
                  <Image
                    src={`/images/weather_icons/${icon}.png`}
                    width={36}
                    height={36}
                    alt={description}
                    className="weather-icon"
                    data-icon-id={icon}
                  />
                  <span className="span">
                    <p className="title-2">{parseInt(temp_max)}&deg;</p>
                  </span>
                </div>
                <p className="label-1">
                  {date.getDate()} {monthNames[date.getMonth()]}
                </p>
                <p className="label-1">{weekDayNames[date.getDay()]}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
