import './globals.css'

export const metadata = {
  title: 'Weather App',
  description: 'Explore accurate and real-time weather information for cities around the world',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/ico/favicon.ico" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&family=Sue+Ellen+Francisco&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="day-mode">
        {children}
      </body>
    </html>
  )
}
