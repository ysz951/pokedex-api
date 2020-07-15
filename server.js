const express = require('express')
const morgan = require('morgan')

const app = express()
const validTypes = [`Bug`, `Dark`, `Dragon`, `Electric`, `Fairy`, `Fighting`, `Fire`, `Flying`, `Ghost`, `Grass`, `Ground`, `Ice`, `Normal`, `Poison`, `Psychic`, `Rock`, `Steel`, `Water`]

app.use(morgan('dev'))

function handleGetTypes(req, res) {
    res.json(validTypes)
}
    
app.get('/types', handleGetTypes)

const PORT = 8000

const PORT = 8000

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})