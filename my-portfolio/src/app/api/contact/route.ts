export async function POST(req: Request) {
    try {
      const { name, email, message } = await req.json()
      console.log('Contact form submitted:', { name, email, message })
  
      // You can later add email logic here (e.g., Nodemailer or Resend)
      return new Response(JSON.stringify({ success: true }), { status: 200 })
    } catch (err) {
      console.error('Contact form error:', err)
      return new Response(JSON.stringify({ error: 'Failed to send message' }), { status: 500 })
    }
  }
  