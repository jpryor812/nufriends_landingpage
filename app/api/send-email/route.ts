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
        from: {
            email: 'justin@nufriends.app',
            name: 'Justin Pryor'
          },
        subject: 'Welcome to nufriends! 👋',
        text: 'We are so excited to have you!', // Plain text version
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 12px;">
            <h1 style="color: #42ADE2; margin-bottom: 4px;">Welcome to NuFriends! 🎉</h1>
            
                <div style="margin-bottom: 20px; text-align: center;">
                    <img 
                        src="https://nufriends.app/nufriends_logo_final.png" 
                        alt="nufriends Logo" 
                        style="max-width: 80%; height: auto; border-radius: 8px;"
                />
            </div>

            <p style="font-size: 16px; line-height: 1.5; margin-bottom: 15px;">
              Hey there! We're so excited to have you as part of our growing community! 
              We're working hard to launch our app soon and will keep you updated on our progress.
            </p>
  
            <p style="font-size: 16px; line-height: 1.5; margin-bottom: 15px;">
               As you may know, we get to know you to match you with friends you'll build fantastic relationships with. To do so, we ask our users to answer a few questions about themselves when they first open the app. To ensure you don't have to wait more than just a few seconds to find your ideal friends, you can take five minutes now to complete the onboarding questionnaire. That way, you'll be ready to message your new friends as soon as you join!
            </p>
  
                <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px;">
                You can fill in the form here:
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSf1rJO30KcQQYY_TiuMUIQ6g5ZHtElne5xVab20U8s9z3ndGA/viewform?usp=sf_link" 
                    style="color: #42ADE2; font-weight: bold; text-decoration: none;">
                    Take our quick questionnaire →
                    </a>
                </p>
  
                <p style="font-size: 14px; color: #666; margin-top: 30px; font-style: italic;">
                Have questions? Just reply to this email - I'm here to help!
                <br><br>
                Talk soon!<br>
                Justin
                </p>

                    <div style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px; text-align: center;">
                <p style="font-size: 14px; color: #666; margin-bottom: 15px;">
                    Follow us on your favorite social media platforms! We'll follow you back :)
                </p>
                    
                <p style="font-size: 14px; line-height: 1.6;">
                    <a href="https://tiktok.com/@nufriends.app" style="color: #4A90E2; text-decoration: underline; margin: 0 5px;">TikTok</a> • 
                    <a href="https://www.youtube.com/channel/UCCud5KMy_xe7smlF-OdYkPg" style="color: #4A90E2; text-decoration: underline; margin: 0 5px;">YouTube</a> • 
                    <a href="https://www.reddit.com/user/nufriends_app/" style="color: #4A90E2; text-decoration: underline; margin: 0 5px;">Reddit</a> • 
                    <a href="https://instagram.com/nufriends.app" style="color: #4A90E2; text-decoration: underline; margin: 0 5px;">Instagram</a>
                 </p>
                </div>
          </div>
        `,
      }

    await sgMail.send(msg)
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 })
  }
}