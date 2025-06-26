const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('HealthLedger API Running')
})

app.listen(3001, () => console.log('Server started on port 3001'))
