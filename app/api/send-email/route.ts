// app/api/send-email/route.ts
import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

// Initialize SendGrid with your API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    const msg = {
      to: email,
      from: 'your-verified-sender@example.com', // Must be verified in SendGrid
      subject: 'Welcome to NuFriends Waitlist!',
      text: 'Thank you for joining our waitlist friend!',
      html: '<strong>Thank you for joining our waitlist friend!</strong>',
    }

    await sgMail.send(msg)
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 })
  }
}