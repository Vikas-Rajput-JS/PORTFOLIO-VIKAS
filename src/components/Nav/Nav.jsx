import React, { useState } from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {IoGameController} from 'react-icons/io5'
import {GiTeacher} from 'react-icons/gi'
export default function Nav() {
  const[activeNav,setActiveNav]=useState('#')
  return (

   <nav>
<a href="#"  ><AiOutlineHome /></a>
<a href="#about"  ><AiOutlineUser/></a>
<a href="#experience" ><BiBook/></a>
<a href="#services" ><RiServiceLine/></a>
<a href="#portfolio" ><IoGameController/></a>
<a href="#testimonials"><GiTeacher/></a>
<a href="#contact" ><BiMessageSquareDetail/></a>
   </nav>
  )
}
