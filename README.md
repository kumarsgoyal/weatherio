# 🌦️ Weatherio - Real-Time Weather Web App
🔗  **Now built with Next.js & React!**

## 📌 Introduction

`Weatherio` is a responsive and interactive weather web application that provides real-time weather updates for any city in the world. It displays current weather conditions, a 6-day forecast, hourly temperature and wind data, air quality index, and more.

Built with `Next.js`, `React`, and deployed on `Vercel`, Weatherio integrates with the `OpenWeather API` to deliver accurate and up-to-date weather insights with server-side rendering and optimal performance.


## 🌍 Project Overview

Weatherio is designed to be lightweight, fast, and user-friendly. The UI uses clean icons, responsive layouts, and animated themes that switch between day and night modes.

🔑 Key Features
- 🌡️ Current weather details: temperature, weather icon, and description
= 📆 6-day forecast with highs and lows
- 🕒 Hourly forecast showing temperature and wind speed (every 2 hours)
- 🌅 Sunrise and sunset times
- 💨 Air quality index (AQI), humidity, visibility, feels-like temperature, and pressure
- 🌓 Dynamic day/night theme toggle with animations
- 📱 Fully responsive for mobile and desktop browsers

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js 18 or higher
- npm or yarn package manager
- OpenWeather API key (free tier available at [openweathermap.org](https://openweathermap.org/api))
- Internet connection to fetch weather data from the OpenWeather API

### 🛠️ Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd weatherio
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env.local` file in the root directory:
```bash
OPENWEATHER_API_KEY=your_api_key_here
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to `http://localhost:3000`

### 📦 Build for Production

```bash
npm run build
npm start
```

## 🗂️ Project Structure

```
weatherio/
├── src/
│   ├── app/
│   │   ├── api/weather/route.js    # API endpoint for OpenWeather
│   │   ├── layout.js               # Root layout component
│   │   ├── page.js                 # Home page
│   │   └── globals.css             # Global styles
│   ├── components/
│   │   ├── WeatherApp.jsx          # Main app component
│   │   ├── Header.jsx              # Header with search and location
│   │   ├── SearchView.jsx          # City search component
│   │   ├── DayNightToggle.jsx      # Animated theme toggle
│   │   ├── CurrentWeather.jsx      # Current weather display
│   │   ├── Highlights.jsx          # Weather highlights section
│   │   ├── HourlyForecast.jsx      # Hourly forecast component
│   │   └── ForecastSection.jsx     # 6-day forecast component
│   └── utils/
│       └── helpers.js              # Utility functions
├── public/
│   ├── images/                     # Weather icons and images
│   └── ico/                        # Favicon
├── next.config.js                  # Next.js configuration
├── package.json                    # Dependencies
└── vercel.json                     # Vercel deployment config
```

## ⚙️ Functionality

- 🔍 Search by city name to display weather data
- 🔄 Live weather updates fetched from OpenWeather API via serverless functions
- 🧭 Hourly and 6-day forecasts with detailed temperature and wind data
- 🌇 Sunrise and sunset information
- 📊 Air quality, humidity, visibility, feels-like, and atmospheric pressure
- 🌗 Day/night mode toggle with animated sun/moon transitions
- 📱 Fully responsive design optimized for all screen sizes
- ⚡ Server-side rendering for improved performance and SEO
- 🔐 Secure API key management through environment variables

## 🚀 Deploy to Vercel

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

**Quick Deploy:**
```bash
npm install -g vercel
vercel login
vercel
```

Don't forget to add your `OPENWEATHER_API_KEY` environment variable in Vercel!


## 🤝 Contributing

Contributions are welcome and appreciated!

- Found a bug? Open an issue
- Want to add a feature or improvement? Feel free to fork the repo and create a pull request
- UI/UX suggestions, refactoring, or documentation updates are also encouraged



