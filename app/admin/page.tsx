'use client'
import { useState } from 'react'
export default function Admin(){
  const [auth, setAuth] = useState(false)
  const [pw, setPw] = useState('')
  async function login(e:any){
    e.preventDefault()
    const res = await fetch('/api/admin/login', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({password: pw})
    })
    const j = await res.json()
    if(j.ok) setAuth(true)
    else alert('Invalid')
  }
  if(!auth) return (
    <main className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold">Admin Login</h1>
      <form onSubmit={login} className="mt-4 space-y-3">
        <input value={pw} onChange={e=>setPw(e.target.value)} placeholder="Admin Password" className="w-full p-2 border" />
        <button className="px-4 py-2 bg-black text-white rounded">Login</button>
      </form>
    </main>
  )
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p className="mt-4">Admin functions will be available here (manage posts, services, leads).</p>
    </main>
  )
}
