import { useTheme } from '@/lib/theme-provider'

export default function Profile() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Profile</h1>

      {/* Profile Card */}
      <div className="bg-surface rounded-lg p-8 border border-border mb-8">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold">
            MJ
          </div>
          <div>
            <h2 className="text-3xl font-bold">Marcus Johnson</h2>
            <p className="text-muted">Athlete • Ranked #14</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div>
            <p className="text-muted text-sm">Tournaments</p>
            <p className="text-2xl font-bold">8</p>
          </div>
          <div>
            <p className="text-muted text-sm">Win Rate</p>
            <p className="text-2xl font-bold">62.5%</p>
          </div>
          <div>
            <p className="text-muted text-sm">Points</p>
            <p className="text-2xl font-bold">2,450</p>
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="bg-surface rounded-lg p-6 border border-border">
        <h3 className="text-xl font-bold mb-6">Settings</h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between pb-4 border-b border-border">
            <span>Dark Mode</span>
            <button
              onClick={toggleTheme}
              className={`px-4 py-2 rounded-lg transition-colors ${
                theme === 'dark'
                  ? 'bg-primary text-white'
                  : 'bg-border text-foreground'
              }`}
            >
              {theme === 'dark' ? 'On' : 'Off'}
            </button>
          </div>

          <div className="flex items-center justify-between pb-4 border-b border-border">
            <span>Notifications</span>
            <button className="px-4 py-2 rounded-lg bg-border text-foreground">
              Manage
            </button>
          </div>

          <div className="flex items-center justify-between">
            <span>Account</span>
            <button className="px-4 py-2 rounded-lg bg-border text-foreground">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
