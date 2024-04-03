const express = require('express')
const app = express()
const port = 8080
const db = require('./models')

const FilmsRouter = require('./routes/Filmes')

app.use(express.json())

app.use('/filmes', FilmsRouter)

db.sequelize.sync().then(() =>{
app.listen(port, () => console.log(`Server Running on port ${port}`))
})