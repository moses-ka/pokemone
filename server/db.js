import express from 'express';

import {MongoClient}  from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

const client = new MongoClient (process.env.MONGO_URI);

const db = client.db('pokemons')
const pokemon = db.collection('pokemon')
export default pokemon


