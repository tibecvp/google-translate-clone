import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

app.post('/test', (req, res) => {
    res.json({ message: 'Success' })
})

app.listen(7000, () => {
    console.log('Test Server is running on port 7000')
})