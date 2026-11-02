import { NextResponse } from 'next/server'
export async function POST(req: Request){
  const body = await req.json()
  const pw = body.password
  // Compare against env var (server-side)
  if(pw === process.env.ADMIN_PASSWORD) return NextResponse.json({ ok: true })
  return NextResponse.json({ ok: false }, { status: 401 })
}
