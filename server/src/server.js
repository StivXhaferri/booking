import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import authRoutes from './routes/user.js'



const app = express()
app.use(express.json())
app.use(cors());

const PORT = process.env.PORT || 8800

connectDB()

app.use('/api/auth', authRoutes )


app.listen(PORT , (req, res) => {
    console.log(`Server running on port ${PORT}`)
})

