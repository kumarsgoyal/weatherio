import { NextResponse } from "next/server";

const BASE_URL = "https://api.openweathermap.org";

const buildUrl = (type, params) => {
  switch (type) {
    case "current":
      return `${BASE_URL}/data/2.5/weather?lat=${params.lat}&lon=${params.lon}&units=metric`;
    case "forecast":
      return `${BASE_URL}/data/2.5/forecast?lat=${params.lat}&lon=${params.lon}&units=metric`;
    case "air":
      return `${BASE_URL}/data/2.5/air_pollution?lat=${params.lat}&lon=${params.lon}`;
    case "reverse":
      return `${BASE_URL}/geo/1.0/reverse?lat=${params.lat}&lon=${params.lon}&limit=5`;
    case "geo":
      return `${BASE_URL}/geo/1.0/direct?q=${params.query}&limit=5`;
    default:
      return null;
      cp.env.local.env;
  }
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");
  const query = searchParams.get("query");

  const API_KEY = process.env.OPENWEATHER_API_KEY;

  if (!API_KEY) {
    return NextResponse.json(
      { error: "API key not configured" },
      { status: 500 },
    );
  }

  const url = buildUrl(type, { lat, lon, query });

  if (!url) {
    return NextResponse.json({ error: "Invalid type" }, { status: 400 });
  }

  try {
    const response = await fetch(`${url}&appid=${API_KEY}`);

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: "OpenWeather API error", details: errorText },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch weather data", message: err.message },
      { status: 500 },
    );
  }
}
