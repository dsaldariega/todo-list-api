const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const port = 4000
const dotenv = require('dotenv')
const routes = require('./routes/routes')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log('Database connected'))

// app.use(cors())
app.use(express.json())
app.use('/todos', routes)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})