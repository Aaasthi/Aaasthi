import Link from 'next/link'
export default function Hero(){
  return (
    <section className="bg-gradient-to-r from-slate-50 to-white py-16">
      <div className="max-w-5xl mx-auto p-6 text-center">
        <h1 className="text-4xl font-bold">Trusted Financial Advisory</h1>
        <p className="mt-3 text-lg">Advisory, wealth management and corporate finance solutions.</p>
        <div className="mt-6">
          <Link href="/contact" className="px-4 py-2 bg-black text-white rounded">Get in touch</Link>
        </div>
      </div>
    </section>
  )
}
