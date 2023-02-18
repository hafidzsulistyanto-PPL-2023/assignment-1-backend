const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const routes = require('./routes/userRoute')

const app = express()
const PORT = process.env.PORT | 5000

app.use(express.json())
app.use(cors())

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.error(err))

// Routes
app.use(routes)

app.listen(PORT, () => console.log('Server running on port ' + PORT))
