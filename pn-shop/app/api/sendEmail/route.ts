import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { name, email, message, postScriptum } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Заполните все обязательные поля.' },
        { status: 400 }
      )
    }

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
      subject: 'Сообщение от PN-SHOP',
      text: `${name}\n${email}\n\n${message}`,
      html: `
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Сообщение:</strong> ${message}</p>
        <p><strong>P.S.:</strong> ${postScriptum || ''}</p>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Ошибка при отправке письма:', error)

    return NextResponse.json(
      { success: false, error: 'Ошибка при отправке письма' },
      { status: 500 }
    )
  }
}
