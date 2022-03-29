import React from 'react'
import { useState} from 'react';
import Nav from "./Nav_Items";

const Top = () => {
    const [nav ,setNav] =useState(["Nav Item1","Nav Item2","Nav Item3","Nav Item4"])
    const item = nav.map((i)=>i);
  return (

    <div className = "header">
         <a href="#">
      <Nav item ={item}/>
      </a>
    
    </div>
  )
}

export default Top
