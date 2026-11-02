import Link from 'next/link'
export default function Navbar(){
  return (
    <nav className="w-full border-b">
      <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <div className="font-bold">FinServ</div>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/blog">Insights</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/admin">Admin</Link>
        </div>
      </div>
    </nav>
  )
}
