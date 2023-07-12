import React from 'react'
import './Header.css'
import CTA from './CTA'
import Me1 from '../../assets/Me1.png'
import Sign from '../../assets/signature.PNG'
import Logo from '../../assets/Logo.JPG'
import Me2 from '../../assets/Me2.png'
import Me3 from '../../assets/Me3.png'
import HeaderSocials from './HeaderSocials'
export default function Header() {
  return (
    <header>
<div className="container header__container">

<h5>Hello I'm</h5>
<h5>Vikas Rajput</h5>
<h5 className='text-light'>MERN-STACK DEVELOPER </h5>
<CTA/>
<HeaderSocials/>
<div className='me'>
<img src={Me2} alt="" />

</div>
<a href="#contact" className="scroll_down">Scroll Down</a>

</div>

    </header>
  )
}
