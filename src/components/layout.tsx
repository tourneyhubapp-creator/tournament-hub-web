import { Outlet, Link, useLocation } from 'react-router-dom'
import { useTheme } from '@/lib/theme-provider'
import { Sun, Moon } from 'lucide-react'

export default function Layout() {
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/tournaments', label: 'Tournaments', icon: '🏆' },
    { path: '/leaderboards', label: 'Leaderboards', icon: '📊' },
    { path: '/profile', label: 'Profile', icon: '👤' },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="bg-surface border-b border-border px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <h1 className="text-2xl font-bold">TourneyHub</h1>
        </div>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-border transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun size={20} />
          ) : (
            <Moon size={20} />
          )}
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>

      {/* Navigation */}
      <nav className="bg-surface border-t border-border px-6 py-4">
        <div className="flex justify-around max-w-7xl mx-auto">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? 'text-primary bg-border'
                  : 'text-muted hover:text-foreground'
              }`}
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}
