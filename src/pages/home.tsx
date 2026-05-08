import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-block mb-6">
          <div className="w-24 h-24 bg-red-600 rounded-2xl flex items-center justify-center">
            <span className="text-white font-bold text-5xl">T</span>
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-4">Welcome to TourneyHub</h1>
        <p className="text-xl text-muted mb-8">
          Manage tournaments, track rankings, and connect with athletes worldwide
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-6 mb-16">
        <div className="bg-surface rounded-lg p-6 border border-border">
          <div className="text-4xl font-bold text-primary mb-2">#14</div>
          <p className="text-muted">Your Rank</p>
          <p className="text-sm text-muted">2 spots to climb</p>
        </div>
        <div className="bg-surface rounded-lg p-6 border border-border">
          <div className="text-4xl font-bold text-primary mb-2">8</div>
          <p className="text-muted">Tournaments</p>
          <p className="text-sm text-muted">2 this month</p>
        </div>
        <div className="bg-surface rounded-lg p-6 border border-border">
          <div className="text-4xl font-bold text-primary mb-2">3W</div>
          <p className="text-muted">Hot Streak</p>
          <p className="text-sm text-muted">Games</p>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Upcoming Events</h2>
          <Link to="/tournaments" className="text-primary hover:underline">
            See All
          </Link>
        </div>
        <div className="space-y-4">
          <div className="bg-surface rounded-lg p-6 border border-border hover:border-primary transition-colors">
            <h3 className="text-lg font-semibold mb-2">Spring Classic 7v7</h3>
            <p className="text-muted mb-4">Apr 12-13 • Dallas, TX</p>
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:opacity-90">
              Open
            </button>
          </div>
          <div className="bg-surface rounded-lg p-6 border border-border hover:border-primary transition-colors">
            <h3 className="text-lg font-semibold mb-2">Gulf Coast Showcase</h3>
            <p className="text-muted mb-4">May 3-4 • Houston, TX</p>
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:opacity-90">
              Open
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-6">
        <Link
          to="/tournaments"
          className="bg-primary text-white rounded-lg p-8 text-center hover:opacity-90 transition-opacity"
        >
          <div className="text-3xl mb-2">🏆</div>
          <h3 className="text-lg font-semibold">Browse Tournaments</h3>
        </Link>
        <Link
          to="/leaderboards"
          className="bg-primary text-white rounded-lg p-8 text-center hover:opacity-90 transition-opacity"
        >
          <div className="text-3xl mb-2">📊</div>
          <h3 className="text-lg font-semibold">View Rankings</h3>
        </Link>
      </div>
    </div>
  )
}
