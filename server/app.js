import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
const app = express()
app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
    });
app.use(express.json())
import route from './router.js'
const port = process.env.PORT || 3013
import mongoose from 'mongoose'
app.use('/pokemon',route)
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})