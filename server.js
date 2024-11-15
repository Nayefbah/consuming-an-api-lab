const express = require('express')
const app = express()
const apiRouter = require(`./Controller/api`)
const port = 4000

app.use(`/`, apiRouter)
app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})
