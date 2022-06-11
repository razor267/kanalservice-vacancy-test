const express = require('express')
const router = require('./routes/kanalservice.routes')

const PORT = process.env.PORT || 8080

const app = express()

app.get('/', (req, res) => {
    res.send('HELLO WORLD!')
})

app.use(express.json())

app.use('/api', router)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))