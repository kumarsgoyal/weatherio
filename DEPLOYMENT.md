# Deployment Guide for WeatherIO on Vercel

## Prerequisites
1. Node.js 18+ installed
2. Vercel account (free tier works)
3. OpenWeather API key

## Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
Create a `.env.local` file in the root directory:
```bash
OPENWEATHER_API_KEY=your_actual_api_key_here
```

### 3. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to see your app.

## Deploy to Vercel

### Method 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Choose your account
- Link to existing project? **N**
- Project name: **weatherio** (or your preferred name)
- Directory: **./
** (press Enter)
- Override settings? **N**

4. **Set Environment Variable**
```bash
vercel env add OPENWEATHER_API_KEY
```
Paste your API key when prompted.
Select: **Production, Preview, Development**

5. **Deploy to Production**
```bash
vercel --prod
```

### Method 2: Using Vercel Dashboard

1. **Push to GitHub**
```bash
git add .
git commit -m "Convert to Next.js app"
git push origin main
```

2. **Import on Vercel**
- Go to [vercel.com](https://vercel.com)
- Click "Add New Project"
- Import your GitHub repository
- Configure:
  - Framework Preset: **Next.js** (auto-detected)
  - Root Directory: **./
**
  - Build Command: **npm run build**

3. **Add Environment Variable**
- Go to Project Settings → Environment Variables
- Add: `OPENWEATHER_API_KEY` = your_api_key
- Apply to: Production, Preview, Development

4. **Deploy**
- Click "Deploy"
- Wait for build to complete

## Verify Deployment

Once deployed, test:
1. Homepage loads
2. Search for cities works
3. Current location button works
4. Weather data displays correctly
5. Day/night toggle works

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Verify `OPENWEATHER_API_KEY` is set
- Check build logs in Vercel dashboard

### API Errors
- Verify API key is correct
- Check API key has necessary permissions on OpenWeather
- Look at Function logs in Vercel dashboard

### Images Not Loading
- Ensure all images are in `public/images/` directory
- Check Next.js Image component paths

## Post-Deployment

### Custom Domain (Optional)
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### Environment Variables
To update:
```bash
vercel env rm OPENWEATHER_API_KEY production
vercel env add OPENWEATHER_API_KEY production
```

Or use the Vercel Dashboard.

## Important Files

- `src/app/api/weather/route.js` - API proxy endpoint
- `src/app/layout.js` - Root layout
- `src/app/page.js` - Home page
- `src/components/` - React components
- `next.config.js` - Next.js configuration
- `vercel.json` - Vercel deployment config

## Support

For issues:
1. Check Vercel deployment logs
2. Check browser console for errors
3. Verify API key is valid
4. Check OpenWeather API status
