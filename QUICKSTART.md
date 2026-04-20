# Quick Start Guide

## 🚀 Get Your Weather App Running in 5 Minutes

### Step 1: Install Node.js
If you don't have Node.js installed:
- Download from [nodejs.org](https://nodejs.org/) (LTS version recommended)
- Or use nvm: `nvm install 18`

Verify installation:
```bash
node --version  # Should be 18.x or higher
npm --version
```

### Step 2: Install Dependencies
```bash
cd weatherio
npm install
```

This will install:
- Next.js 14
- React 18
- All required dependencies

### Step 3: Get OpenWeather API Key
1. Go to [openweathermap.org/api](https://openweathermap.org/api)
2. Sign up for a free account
3. Go to API keys section
4. Copy your API key

### Step 4: Create Environment File
Create a file named `.env.local` in the root directory:

```bash
OPENWEATHER_API_KEY=paste_your_api_key_here
```

**Important:** Don't commit this file! It's already in `.gitignore`.

### Step 5: Run Development Server
```bash
npm run dev
```

Your app will be available at `http://localhost:3000`

### Step 6: Test the App
- ✅ Homepage should load with weather for Delhi (default)
- ✅ Click "Current Location" to get weather for your location
- ✅ Search for any city
- ✅ Toggle day/night theme
- ✅ View hourly and 6-day forecasts

## 📦 Deploy to Vercel (Optional)

### One-Click Deploy

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Add environment variable:
```bash
vercel env add OPENWEATHER_API_KEY
```
(Paste your API key and select all environments)

5. Deploy to production:
```bash
vercel --prod
```

### Using Vercel Dashboard

1. Push code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Add `OPENWEATHER_API_KEY` in environment variables
5. Deploy!

## 🐛 Common Issues

### "npm: command not found"
- Install Node.js from [nodejs.org](https://nodejs.org/)

### "API key not configured"
- Make sure `.env.local` exists in root directory
- Check that `OPENWEATHER_API_KEY` is set
- Restart the dev server after creating `.env.local`

### "Module not found: Can't resolve '@/...'"
- Make sure `jsconfig.json` exists
- Try deleting `node_modules` and `.next` folders, then run `npm install` again

### Images not showing
- Check that `public/images/` directory has all weather icons
- Verify images are in the correct path

### Build fails on Vercel
- Check that environment variable is set in Vercel dashboard
- Look at build logs for specific errors
- Make sure all dependencies are in `package.json`

## 📚 Next Steps

- Customize the default location in `src/components/WeatherApp.jsx`
- Add more features (see MIGRATION_NOTES.md)
- Customize styling in `src/app/globals.css`
- Add your own domain in Vercel

## 🆘 Need Help?

Check these files:
- `DEPLOYMENT.md` - Detailed deployment guide
- `MIGRATION_NOTES.md` - Technical details about the migration
- `README.md` - Project overview

Happy coding! 🌦️
