import express from 'express'
import nodemailer from 'nodemailer'
import { prisma } from './prisma'

const app = express()
app.use(express.json())

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "2ba59dbaa0741c",
      pass: "1e4a257c689609"
    }
  });

app.post('/feedbacks', async (req, res) => {
    const feedback = await prisma.feedback.create({
        data: {
            type: req.body.type,
            comment: req.body.comment,
            screenshot: req.body.screenshot
        }
    })

    transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com',
        to: 'Fernanda Soares <fernandasoares.reis1@gmail.com>',
        subject: 'Novo feedback',
        html: [
            `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
            `<p>Tipo do feedback: ${req.body.type}</p>`,
            `<p>Comentário: ${req.body.comment}</p>`, 
            `</div>`
        ].join('\n')
    })
    return res.status(201).json({data: feedback})
})

app.listen(3333, () => {
    console.log('HTTP server running!')
})