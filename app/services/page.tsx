import Link from 'next/link'
export default async function Services(){
  // For MVP we will fetch from API later; static placeholders for now
  const items = [
    {id:1, title:'Wealth Management'},
    {id:2, title:'Tax Advisory'},
    {id:3, title:'Business Finance'}
  ]
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Services</h1>
      <ul className="mt-4 space-y-3">
        {items.map(s=>(
          <li key={s.id} className="p-4 border rounded">
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-sm mt-1">Short description about {s.title}.</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
