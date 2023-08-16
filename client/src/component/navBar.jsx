import React from "react";
import { Link } from "react-router-dom";


export default function NavBar() {

  return (
    <>

     <div className="w-full bg-slate-500 h-12 flex justify-center items-center ">
        <ul className=" flex  justify-evenly items-center gap-4">

        <li>
        
        </li>
        <li>
        <Link to="/Pokemones">Pokemones</Link>
        </li>
        <li>

        </li>
        </ul>
     </div>
    </>

  )
}
