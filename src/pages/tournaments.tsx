export default function Tournaments() {
  const tournaments = [
    { id: 1, name: 'Spring Classic 7v7', date: 'Apr 12-13', location: 'Dallas, TX', teams: 24 },
    { id: 2, name: 'Gulf Coast Showcase', date: 'May 3-4', location: 'Houston, TX', teams: 32 },
    { id: 3, name: 'Summer Championship', date: 'Jun 15-17', location: 'Austin, TX', teams: 48 },
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Tournaments</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tournaments.map(tournament => (
          <div
            key={tournament.id}
            className="bg-surface rounded-lg p-6 border border-border hover:border-primary transition-colors cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2">{tournament.name}</h2>
            <p className="text-muted mb-1">{tournament.date}</p>
            <p className="text-muted mb-4">{tournament.location}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted">{tournament.teams} teams</span>
              <button className="bg-primary text-white px-4 py-2 rounded hover:opacity-90">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
