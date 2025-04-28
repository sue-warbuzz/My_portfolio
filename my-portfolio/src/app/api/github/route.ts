export const dynamic = 'force-dynamic' // optional: ensures fresh fetch

export async function GET() {
  const res = await fetch('https://api.github.com/users/sue-warbuzz/repos?sort=updated', {
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  })

  if (!res.ok) {
    return new Response(JSON.stringify({ error: 'Failed to fetch repos' }), {
      status: 500,
    })
  }

  const data = await res.json()
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}
