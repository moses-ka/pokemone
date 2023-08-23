import express from 'express';
import pokemon,{users} from './db.js';

const route = express.Router();
route.get('/users', async (req, res) => {
  try {
    const user = await users.find({}).toArray();
    res.status(200).json(user)
  } catch (error) {
    console.log(error);
  }
})
route.post('/users', async (req, res) => {
if(req.body !== undefined || req.body !== null){
  const usere = req.body.user
  const score = parseInt(req.body.score)
  try {
    const toInsert = await users.insertOne({
      "user": usere,
      "score" : score
    })
    res.status(200).json(toInsert)
  } catch (error) {
    console.log(error);
  }
}
 
})
route.get('/', async(req, res) => {
  try {
    const poke = await pokemon.find({}).toArray();
    
    res.status(200).send(poke)
  } catch (error) {
    res.status(404).send(error)
  }
})
route.get('/:id', async(req, res) => {
    try {
        const num = parseInt(req.params.id)
        
        const poke = await pokemon.findOne({id:num});
    
        res.status(200).json(poke)
      } catch (error) {
        res.status(404).send(error)
      }
})
route.get('/:id/:name', async(req, res) => {
    try {
        const num = parseInt(req.params.id)
        const changable = req.params.name
        
        const poke = await pokemon.findOne({id:num});
        if (changable == 'name') {
           res.status(200).json(poke.name)
        } else if (changable == 'type') {
            res.status(200).json(poke.type)
        } else if (changable == 'base') {
            res.status(200).json(poke.base)
        }
      
        
      } catch (error) {
        res.status(404).send(error)
      }
})


export default route