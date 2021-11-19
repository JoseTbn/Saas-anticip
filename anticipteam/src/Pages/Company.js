import React from 'react'
import WavyBackground from '../Components/Wavybackround.js/WavyBackground'
import { NavLink } from "react-router-dom";
import { global, GlobalStyle} from '../globalStyles';
import Navbar from '../Components/Navbar/Navbar'
import './Company/Company.css'
import Forms from '../Components/Form/Forms';
import Skill1 from '../assets/img/Skills 1.svg'




export default function Company() {
    return ( 
        <>
         {/* < GlobalStyle/> */}
          <Navbar/>
      <Forms/> 
      <img className='right__img' src={Skill1} alt="" />
          <WavyBackground/>   
         
         
      </> 
    ) 
}
