import express from 'express';
import mongoose from 'mongoose'
import {MongoClient}  from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

const client = new MongoClient (process.env.MONGO_URI);

const db = client.db('pokemons')
const pokemon = db.collection('pokemon')
export default pokemon
// mongoose
// .connect(process.env.MONGO_URI)
// try {
//     console.log('connected to mongodb')
// } catch (error) {
//     console.log(error)
// }

// const pokemon = new mongoose.Schema({
//     id:{
//         type :Number,
//         name:{
//             english:{
//                 type:String
//             },
//             japanese:{
//                 type:String
//             },
//             chinese:{
//                 type : String
//             },
//             french:{
//                 type:String
//             }
//             },
//             type : [],
//             base:{
//                 HP: Number,
//                 Attack: Number,
//                 Defense: Number,
//                 "Sp.Attack": Number,
//                 "Sp.Defense": Number,
//                 Speed: Number
//             }
//         }
//     }
// );
// const any = new mongoose.Schema({ any:{} })
// const poke = mongoose.model('Pokemon', pokemon);

// export default poke

