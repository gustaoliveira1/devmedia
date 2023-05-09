const express = require("express")
const app = express()

const dailyMessages = require("./dailyMessage")
const date = new Date()

app.get("/", (req, res) => {
    const day = date.getDate()
    const quoteOfTheDaily = dailyMessages.returnDailyMessage(day)

    res.json({mensagem: quoteOfTheDaily})
})

app.listen(8080, () => {
    console.log(`Servidor iniciado em ${date}`)
})