import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import NavBar from './navBar';
export default function Pokemon() {
  const { id } = useParams()
  const [pokemon,setPokemone] = useState()
    useEffect(() => {
        
        axios.get(`https://pokomone.onrender.com/pokemon/${id}`)
          .then((response) => {
          console.log(response.data ,' this is response');
          setPokemone(response.data );
          })
          .catch((error) => {
            console.log(error);
          });
      },[]);
      
  
      const sp = "Sp. Attack"
      const sd = "Sp. Defense"
  return (<>
  <div className='flex flex-col justify-center items-center gap-6'>
    <NavBar/>
 
   <div className="flex flex-col justify-center items-center mb-2 text-2xl font-bold 
   tracking-tight text-gray-900 dark:text-white max-w-sm p-6 bg-white border
    border-gray-200 rounded-lg shadow
             hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700
              dark:hover:bg-gray-700">
              {pokemon?.name.english}
              <h5 className="  text-lg text-gray-900 dark:text-white max-w-sm p-6 
             hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              {pokemon?.type}
              </h5>
              <div className=" text-sm flex flex-col justify-center items-center font-normal text-gray-700 dark:text-gray-400">
                 <span>HP:{pokemon?.base.HP}</span> 
             <span> Attack:{pokemon?.base.Attack}</span>
              <span>Defense: {pokemon?.base.Defense}</span>
            <span>  Speed:{pokemon?.base.Speed}</span>
            <span> Sp. Attack: {pokemon?.base[sp]} </span>
            <span>Sp. Defense: {pokemon?.base[sd]}</span>
            </div>
              </div>
              </div>
  </>
  )
}
