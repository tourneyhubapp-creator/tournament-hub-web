# TourneyHub Web App

Desktop/browser version of TourneyHub tournament management platform.

## Setup

```bash
npm install
npm run dev
```

## Features

- **Responsive Design** - Works on desktop, tablet, and mobile browsers
- **Dark Mode** - Default dark theme with toggle option
- **Tournament Management** - Browse and manage tournaments
- **Rankings** - View national leaderboards
- **User Profile** - Manage account settings
- **Real-time Updates** - Connected to shared backend API

## Architecture

- **Frontend**: React 19 + TypeScript + Tailwind CSS
- **Routing**: React Router v6
- **State Management**: TanStack Query + Zustand
- **API Client**: tRPC (shared with mobile app)
- **Build Tool**: Vite

## Project Structure

```
src/
  pages/          ← Page components (Home, Tournaments, etc.)
  components/     ← Reusable components (Layout, etc.)
  lib/            ← Utilities (theme, query client, etc.)
  App.tsx         ← Main app component
  main.tsx        ← Entry point
  index.css       ← Global styles
```

## Development

### Running the dev server

```bash
npm run dev
```

Server runs on http://localhost:5173

### Building for production

```bash
npm run build
```

### Type checking

```bash
npm run type-check
```

## API Integration

The web app connects to the same backend API as the mobile app. Configure the API URL in `vite.config.ts`:

```typescript
proxy: {
  '/api': {
    target: 'http://localhost:3000',
    changeOrigin: true,
  },
}
```

## Deployment

See `DEPLOYMENT.md` for production deployment instructions.

## Shared Features with Mobile App

- User authentication (OAuth)
- Tournament management
- Payment processing (Stripe)
- Notifications (Firebase)
- Facial recognition check-in
- Staff management
- Role-based access control

## Mobile App Compatibility

This web app does NOT modify the mobile app. Both platforms share:
- Same backend API
- Same database
- Same user accounts
- Same business logic

Changes to one platform do not affect the other.
