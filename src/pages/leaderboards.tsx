export default function Leaderboards() {
  const leaderboard = [
    { rank: 1, name: 'Alex Thompson', tournaments: 12, wins: 8, points: 2450 },
    { rank: 2, name: 'Jordan Davis', tournaments: 11, wins: 7, points: 2380 },
    { rank: 3, name: 'Casey Williams', tournaments: 10, wins: 9, points: 2320 },
    { rank: 4, name: 'Morgan Brown', tournaments: 9, wins: 6, points: 2180 },
    { rank: 5, name: 'Riley Martinez', tournaments: 8, wins: 7, points: 2050 },
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">National Rankings</h1>

      <div className="bg-surface rounded-lg border border-border overflow-hidden">
        <table className="w-full">
          <thead className="border-b border-border">
            <tr>
              <th className="px-6 py-4 text-left text-muted">Rank</th>
              <th className="px-6 py-4 text-left text-muted">Player</th>
              <th className="px-6 py-4 text-left text-muted">Tournaments</th>
              <th className="px-6 py-4 text-left text-muted">Wins</th>
              <th className="px-6 py-4 text-left text-muted">Points</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map(player => (
              <tr
                key={player.rank}
                className="border-b border-border hover:bg-border transition-colors"
              >
                <td className="px-6 py-4 font-semibold text-primary">#{player.rank}</td>
                <td className="px-6 py-4">{player.name}</td>
                <td className="px-6 py-4 text-muted">{player.tournaments}</td>
                <td className="px-6 py-4 text-muted">{player.wins}</td>
                <td className="px-6 py-4 font-semibold">{player.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
