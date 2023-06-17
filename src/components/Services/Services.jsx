import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'
export default function Services() {
  return (
    <section id='services' className='services_section'>
<h5>What I Offer</h5>
<h2>Services</h2>
<div className="container services__container">
  <article className="service">
    <div className="service__hand">
      <h3>Front-End Development</h3>
    </div>
    <ul className="service__list">
      <li>
        <BiCheck className='service__list-icons'/>
        <p>Web A  pp Development.</p>
      </li>
      <li>
        <BiCheck className='service__list-icons'/>
        <p>Web Product Mesign.</p>
      </li>
      <li>
        <BiCheck className='service__list-icons'/>
        <p>Web Development Support And Maintenance.</p>
      </li>
      <li>
        <BiCheck className='service__list-icons'/>
        <p>Web Hosting.</p>
      </li>
      <li>
        <BiCheck className='service__list-icons'/>
        <p>Web Optimization</p>
      </li>
     
    </ul>
  </article>

  {/* Content Creator */}
  <article className="service">
    <div className="service__hand">
      <h3>ReactJs Development</h3>
    </div>
    <ul className="service__list">
     
      <li>
        <BiCheck className='service__list-icons'/>
        <p>Custom React Development.</p>
      </li>
      <li>
        <BiCheck className='service__list-icons'/>
        <p>Single Page Development.</p>
      </li>
      <li>
        <BiCheck className='service__list-icons'/>
        <p>App Migration to React.</p>
      </li>
      <li>
        <BiCheck className='service__list-icons'/>
        <p>React Consulting.</p>
      </li>
      <li>
        <BiCheck className='service__list-icons'/>
        <p>Maintenance and Support.</p>
      </li>
      <li>
        <BiCheck className='service__list-icons'/>
        <p>Touch User Interface.</p>
      </li>
      <li>
        <BiCheck className='service__list-icons'/>
        <p>Form-Based User Interface.</p>
      </li>
    </ul>
  </article>

  {/* WEB DEVELOPMENT */}
  <article className="service">
    <div className="service__hand">
      <h3>UI/UX Design</h3>
    </div>
    <ul className="service__list">
    
      <li>
        <BiCheck className='service__list-icons'/>
        <p>Custom Web Design & Development.</p>
      </li>
      <li>
        <BiCheck className='service__list-icons'/>
        <p>Corporate Branding & Graphics Design</p>
      </li>
      <li>
        <BiCheck className='service__list-icons'/>
        <p>Product Design</p>
      </li>
    
      <li>
        <BiCheck className='service__list-icons'/>
        <p>Natural Language User Interface.</p>
      </li>
    </ul>
  </article>


</div>
    </section>
  )
}
