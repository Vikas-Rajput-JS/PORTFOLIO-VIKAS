import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonials from './components/Testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/Footer'
const App = () => {
return(
<>
<Header />
<Nav />
<About />
<Experience />
<Services />
<Portfolio />
<Testimonials />
<Contact />
<Footer />
</>
  )
}
export default App;