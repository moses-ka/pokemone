import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "./navBar";

export default function Pokemones() {
  const [pokemones, setPokemones] = useState([]);
  useEffect(() => {
   
      axios.get("https://pokomone.onrender.com/pokemon")
      .then((response) => {
        console.log(response.data);
        setPokemones(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
    <NavBar/>
   
      <div className="flex flex-col justify-center items-center gap-2 p-4">
      <h1>Pokemones</h1>
        {pokemones.map((poke) => (
          <div
            key={poke.id}
            className="flex flex-col justify-center items-center gap-2 p-4   rounded-lg w-80"
          >
            <Link className="  w-40 h-40 flex flex-col justify-center items-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow
             hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            to={`/pokemon/${poke.id}`}>
              {poke.name.english}
              <h5 className="  text-lg text-gray-900 dark:text-white max-w-sm p-6 
             hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">{poke.type}
              </h5>
              <div className=" text-sm flex flex-col font-normal text-gray-700 dark:text-gray-400"> 
             
           
            </div>
              </Link>

            
          </div>
        ))}
      </div>
    </div>
  );
}
