import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import path from 'path'

export async function POST(req: Request) {
  try {
    const { name, email, message, postScriptum } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Fill all fields.' },
        { status: 400 }
      )
    }

    console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS)

    const logoPath = path.resolve('./public/img/output_logo.png')

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `Pn-Shop <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Message from PN-SHOP',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <img src="cid:logoimage" alt="PN-SHOP" style="width: 150px; height: auto; margin-bottom: 20px;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
          <p><strong>P.S.:</strong> ${postScriptum || ''}</p>
        </div>
      `,
      attachments: [
        {
          filename: 'logo.png',
          path: logoPath,
          cid: 'logoimage', // Должен совпадать с src="cid:logoimage"
        },
      ],
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error sending email:', error)

    return NextResponse.json(
      { success: false, error: 'Error sending email' },
      { status: 500 }
    )
  }
}
