const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({mensagem: "Hello, world!"})
})

app.listen(8080, () => {
    const data = new Date
    console.log("Servidor aberto na porta 8080")
})