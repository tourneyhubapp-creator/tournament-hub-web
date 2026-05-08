# Web App Deployment Guide

## Prerequisites

- Node.js 22+
- npm or pnpm
- Production API server running

## Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

## Deployment Options

### Option 1: Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables:
   ```
   VITE_API_URL=https://api.tourneyHub.com
   ```
3. Deploy automatically on push to main branch

### Option 2: Netlify

1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Set environment variables in Netlify dashboard

### Option 3: Self-hosted (Docker)

Create `Dockerfile`:

```dockerfile
FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

Build and run:

```bash
docker build -t tourneyHub-web .
docker run -p 3000:3000 tourneyHub-web
```

### Option 4: Traditional Server (Nginx)

1. Build the app: `npm run build`
2. Copy `dist/` to your server
3. Configure Nginx to serve static files:

```nginx
server {
  listen 80;
  server_name app.tourneyHub.com;

  root /var/www/tourneyHub-web/dist;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }

  location /api {
    proxy_pass http://api.tourneyHub.com;
  }
}
```

## Environment Variables

Create `.env.production`:

```
VITE_API_URL=https://api.tourneyHub.com
VITE_STRIPE_PUBLIC_KEY=pk_live_your_key
VITE_FIREBASE_CONFIG=your_firebase_config
```

## Performance Optimization

- Gzip compression enabled
- Code splitting with Vite
- Image optimization
- CSS minification
- JavaScript minification

## Monitoring

- Set up error tracking (Sentry)
- Monitor performance (Vercel Analytics)
- Log aggregation (LogRocket)
- Uptime monitoring (UptimeRobot)

## Rollback

To rollback to a previous version:

1. Revert code to previous commit
2. Rebuild: `npm run build`
3. Redeploy to your hosting platform

## SSL/TLS Certificate

Use Let's Encrypt for free SSL certificates:

```bash
certbot certonly --webroot -w /var/www/tourneyHub-web/dist -d app.tourneyHub.com
```

## CDN Configuration

For faster content delivery, configure a CDN (Cloudflare, AWS CloudFront):

1. Point DNS to CDN
2. Configure origin to your server
3. Enable caching for static assets
4. Set cache expiration for index.html to 0

## Database Backups

The web app doesn't store data locally. All data is in the shared backend database. Ensure backend database backups are configured.

## Support

For deployment issues, check:
- Browser console for errors
- Network tab for API calls
- Server logs for backend issues
