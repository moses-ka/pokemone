import React,{useState,useEffect} from 'react'
import { useParams,Link} from 'react-router-dom'
import axios from 'axios';
import NavBar from './navBar';
export default function Pokemon() {
  const { id } = useParams()
  const [pokemon,setPokemone] = useState()
    useEffect(() => {
        
        axios.get(`https://pokemon.cyclic.cloud/pokemon/${id}`)
          .then((response) => {
          
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
 
   <div className="flex flex-col justify-center items-center mb-2 text-2xl font-bold  w-full
   tracking-tight text-gray-900 dark:text-white max-w-sm p-6 bg-white border
    border-gray-200 rounded-lg shadow
             hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700
              dark:hover:bg-gray-700">
                 {pokemon?.name.english} <br />
                  <span  className=' text-lg'>{pokemon?.name.japanese}</span> <br />
              <span className='text-sm'>{pokemon?.name.chinese}</span>   <br />
              <span  className='text-sm'>{pokemon?.name.french}</span> <br />
              <h5 className="  text-lg text-gray-900 dark:text-white max-w-sm p-6 
             hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              {pokemon?.type}
              </h5>
              <div className=" text-sm flex flex-col justify-center items-center gap-4 font-normal text-gray-700 dark:text-gray-400">
                 <span>HP:{pokemon?.base.HP}</span> 
             <span> Attack:{pokemon?.base.Attack}</span>
              <span>Defense: {pokemon?.base.Defense}</span>
            <span>  Speed:{pokemon?.base.Speed}</span>
            <span> Sp. Attack: {pokemon?.base[sp]} </span>
            <span>Sp. Defense: {pokemon?.base[sd]}</span>
            <button className=' bg-blue-400 w-20 h-10 rounded-lg hover:bg-blue-700 hover:text-white'>
              <Link to={`/Pokemon/${pokemon?.id}/fight`}>Pick</Link></button>
            </div>
              </div>
              </div>
  </>
  )
}
