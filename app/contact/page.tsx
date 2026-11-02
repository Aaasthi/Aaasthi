'use client'
import { useState } from 'react'

export default function ContactPage(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [status, setStatus] = useState('')

  async function submit(e:any){
    e.preventDefault()
    setStatus('sending')
    const res = await fetch('/api/leads', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(form)
    })
    if(res.ok) setStatus('sent')
    else setStatus('error')
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Contact</h1>
      <form onSubmit={submit} className="mt-4 space-y-4">
        <input className="w-full p-2 border" placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
        <input className="w-full p-2 border" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
        <textarea className="w-full p-2 border" placeholder="Message" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} />
        <button className="px-4 py-2 bg-black text-white rounded" type="submit">Send</button>
      </form>
      {status && <p className="mt-4">Status: {status}</p>}
    </main>
  )
}
