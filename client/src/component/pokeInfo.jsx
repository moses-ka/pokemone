import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function PokeInfo() {
  const [pokemon, setPokemon] = useState();
  const [pokemon2, setPokemon2] = useState();
  const [random, setRandom] = useState();
  const [fir, setFir] = useState(99);
  const [sec, setSec] = useState(99);
 
  const { id } = useParams();
  const winner =  () => {
    if(fir <= 0){
      console.log('Player 2 winner')
      setRandom(Math.floor(Math.random() * 809) + 1)
      setFir(99); setSec(99)
    }else if (sec <= 0){
      console.log('Player 1 winner')
      setRandom(Math.floor(Math.random() * 809) + 1)
      setFir(99); setSec(99)
    }
   
 };
winner();
 const Fight = () => {
 
   if (pokemon.base.Attack < pokemon2.base.Attack) {
     setFir(prevFirstHealth => prevFirstHealth - 5);
   } else {
     setSec(prevSecondHealth => prevSecondHealth - 5);
   }
 
   if (pokemon.base.Defense < pokemon2.base.Defense) {
     setFir(prevFirstHealth => prevFirstHealth - 5);
   } else {
     setSec(prevSecondHealth => prevSecondHealth - 5);
   }
 
   if (pokemon.base.Speed < pokemon2.base.Speed) {
     setFir(prevFirstHealth => prevFirstHealth - 5);
   } else {
     setSec(prevSecondHealth => prevSecondHealth - 5);
   }
  
 

}
  useEffect(() => {
    axios
      .get(`https://pokomone.onrender.com/pokemon/${id}`)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`https://pokomone.onrender.com/pokemon/${random}`)
      .then((response) => {
        setPokemon2(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [random]);

  const sp = "Sp. Attack";
  const sd = "Sp. Defense";

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4">
        <div
          className="flex flex-col justify-center items-center mb-2 text-2xl font-bold w-full mt-8
          tracking-tight text-gray-900 dark:text-white max-w-sm p-6 bg-white border
          border-gray-200 rounded-lg shadow
          hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700
          dark:hover:bg-gray-700"
        >
          {pokemon?.name.english} <br />
          <span className="text-sm">Player 1</span>
          <h5
            className="  text-lg text-gray-900 dark:text-white max-w-sm p-4 
             hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            {pokemon?.type}
          </h5>
          <div className=" text-sm flex flex-col justify-center items-center font-normal text-gray-700 dark:text-gray-400">
            <span>HP : {pokemon?.base.HP}</span>
            <span> Attack : {pokemon?.base.Attack}</span>
            <span>Defense : {pokemon?.base.Defense}</span>
            <span> Speed : {pokemon?.base.Speed}</span>
            <span> Sp. Attack : {pokemon?.base[sp]} </span>
            <span>Sp. Defense : {pokemon?.base[sd]}</span>
            <span>Health : {fir}</span>
          </div>
          <div className="flex flex-col justify-center items-center mb-2 text-2xl font-bold w-full mt-8">
            <div className="flex justify-center items-center gap-2">
             <button className="text-white text-6xl text-center p-4 bg-slate-800 rounded-lg
              hover:bg-slate-400 hover:text-slate-800   
                " onClick={()=>{setRandom(Math.floor(Math.random() * 809) + 1) 
                setFir(99); setSec(99)}}><span>Versus</span></button>
              <button
                onClick={Fight}
                className="bg-red-400 w-20 h-10 rounded-lg hover:bg-red-700   inline-block
                hover:text-white"
              >
                {" "}
                Fight
              </button>
            </div>

            <div className="flex justify-center flex-col items-center gap-2 mt-4">
              {pokemon2?.name.english} <br />
              <span className="text-sm">Player 2</span>
              <h5
                className="  text-lg text-gray-900 dark:text-white max-w-sm p-4 
                hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                {pokemon2?.type}
              </h5>
              <div className=" text-sm flex flex-col justify-center items-center font-normal text-gray-700 dark:text-gray-400">
                <span>HP : {pokemon2?.base.HP}</span>
                <span> Attack : {pokemon2?.base.Attack}</span>
                <span>Defense : {pokemon2?.base.Defense}</span>
                <span> Speed : {pokemon2?.base.Speed}</span>
                <span> Sp. Attack : {pokemon2?.base[sp]} </span>
                <span>Sp. Defense : {pokemon2?.base[sd]}</span>
                <span>Health : {sec}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
