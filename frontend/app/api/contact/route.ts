import { NextResponse } from 'next/server';

// This function handles POST requests to /api/contact
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, message } = body;

    // --- Basic Validation ---
    if (!fullName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // --- Here is where you would process the data ---
    // For example, send an email using a service like Resend, Nodemailer, or SendGrid.
    
    // For demonstration, we'll just log it to the console.
    console.log('--- New Contact Form Submission ---');
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Phone:', phone || 'Not provided');
    console.log('Message:', message);
    console.log('------------------------------------');

    // You can add your email sending logic here.
    // await sendEmail({ fullName, email, phone, message });

    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}