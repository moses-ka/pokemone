import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
app.use(express.json())
import route from './router.js'
const port = process.env.PORT || 3013
import mongoose from 'mongoose'
app.use('/pokemon',route)
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})