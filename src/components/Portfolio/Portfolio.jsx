import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
// import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

export default function Portfolio() {
let Data = [
  {
id:1,
image:IMG2,
title:'Weather-Forecast',
github:'https://github.com/davidthakur/WEATHER-APP',
demo:'https://weather-app-400.pages.dev/'
 },
  {
id:2,
image:IMG6,
title:'Youtube-Clone',
github:'https://github.com/davidthakur/Tech-Youtube',
demo:'https://tech-youtube.pages.dev/'
 },
  {
id:3,
image:IMG3,
title:'Universal-Store',
github:'https://github.com/davidthakur/UNIVERSAL-STORE',
demo:'https://universal-store.pages.dev/'
 },
  {
id:4,
image:IMG4,
title:'Other Projects',
github:'https://github.com/davidthakur',
demo:''
 }
]

  return (
    <section id='portfolio' className='portfolio_section'>
 <h5>My Recent Work</h5>
 <h2>Portfolio</h2>
 <div className=" portfolio__container">
{
  Data.map(({id,image,title,github,demo}) => {
    return(

      <article className='portfolio__item'>
    <div className="portfolio__item-image">
      <img className='project'  src={image} alt="" />
    </div>
      <h3>{title}</h3>
      <div className="portfolio__item-cta">
      <a href={github} className='btn'>GitHub</a>
      <a href={demo}  target='_blank' className='btn btn-primary'>Live Demo</a>
  
      </div>
    </article>
  )
  })
}

 </div>
       </section>
  )
}
