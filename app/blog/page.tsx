import Link from 'next/link'
export default async function Blog(){
  // Placeholder list
  const posts = [
    {id:1, slug:'market-outlook-2025', title:'Market Outlook 2025'},
    {id:2, slug:'retirement-planning', title:'Retirement Planning Basics'}
  ]
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Insights</h1>
      <ul className="mt-4 space-y-4">
        {posts.map(p=>(
          <li key={p.id} className="p-4 border rounded">
            <Link href={'/blog/'+p.slug} className="font-semibold">{p.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
