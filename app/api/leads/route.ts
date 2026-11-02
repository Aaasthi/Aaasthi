import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function POST(req: Request){
  try {
    const body = await req.json()
    const { name, email, message } = body
    if(!email || !message) return NextResponse.json({ error: 'Missing' }, { status: 400 })
    const lead = await prisma.lead.create({
      data: { name: name || '', email, message }
    })
    return NextResponse.json({ ok: true, id: lead.id })
  } catch(e){
    console.error(e)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
