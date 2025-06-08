const express = require('express')
const app = express()

app.use(express.json())

app.post('/', (req, res) => {
  console.log('Webhook recebido:')
  console.log(req.body)
  res.sendStatus(200)
})

app.listen(3000, () => {
  console.log('Servidor escutando na porta 3000')
})
