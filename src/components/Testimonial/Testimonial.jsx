import React from 'react'
import './Testimonial.css'
import { Navigation, Pagination, Scrollbar, Ally } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';



import Senior from '../../assets/Senior.JPG'
import Senior2 from '../../assets/Senior2.JPG'
export default function Testimonial() {
  return (
   <section id='testimonials' className='testimonials__section'>
<h5>Under Guidence Of</h5>
<h2>Senior Developer</h2>
<div className="container testimonials__container">
  <article className="testimonial">
    <div className="client__avatar">
<img className='senior-img' src={Senior} alt="" />
    </div>
    
<h5 className='client__name'>Mahender Rajput</h5>
<small className='slient__review'>He is A MERN STACK DEVELOPER And He Helped To Reach This Position Now. Special Thanks To Him</small>
  </article>
  <article className="testimonial">
    <div className="client__avatar">
<img className='senior-img' src={Senior2} alt="" />
    </div>
<h5 className='client__name'>Sachin Hans</h5>
<small className='slient__review'>He is a FRONT-END DEVELOPER And He Also Helped Me In This Journey</small>
  </article>


</div>
   </section>
  )
}
