import React,{useEffect, useState} from 'react'
import axios from 'axios'

export default function User({score}) {
    const [user, setUser] = useState('')

    const [leaderBord,setLeaderBord] = useState([]);
    const [update ,setUpdate] = useState(false)
    console.log(user , score , ' user and score') 
    useEffect(()=>{
        axios.get('http://localhost:3012/pokemon/users')
        .then((response)=>{
            setLeaderBord(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[update]);
   const  handleChange = (e) =>{
        setUser(e.target.value)

    }
    const handleSubmit = () => {
     
  
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user: user , score: score })
        };
        fetch('http://localhost:3012/pokemon/users', requestOptions)
            .then(response => console.log(response.json()))
            .then(()=>{setUpdate(!update)})
           
   
           
    }

    
  return (
    <>
    <div key={4512} className="flex justify-center items-center flex-col gap-2 p-4 bg-green-100 rounded-lg h-48 w-full">
    {leaderBord?.map((el, index) => {
    return (
        <div key={el.id + '-' + index}>
            <div className="flex justify-center items-center flex-col bg-green-400 rounded-lg w-28">
                <span>{el?.user} <span>{el?.score}</span></span>
            </div>
        </div>
    )
})}
  </div>
    <div className='flex p-4 justify-center flex-col items-center gap-6 h-48 w-full'>
        
        <input className='bg-gray-200 w-full rounded-lg placeholder:text-black p-2' placeholder='Enter a user' 
        onChange={handleChange} type="text" name="" id="" />
        <button className=' w-full rounded-lg bg-green-500' onClick={handleSubmit}>Submit</button>
    </div>
  </>
  )
}
