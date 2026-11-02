import Link from 'next/link'
import Hero from '../components/Hero'
export default function Home() {
  return (
    <main>
      <Hero />
      <section className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-semibold">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="p-4 border rounded">Wealth Management</div>
          <div className="p-4 border rounded">Financial Planning</div>
          <div className="p-4 border rounded">Corporate Advisory</div>
        </div>
        <div className="mt-6">
          <Link href="/contact" className="inline-block px-4 py-2 bg-black text-white rounded">Contact Us</Link>
        </div>
      </section>
    </main>
  )
}
