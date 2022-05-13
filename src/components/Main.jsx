import React from 'react'
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Faq from './FAQ/Faq';

const Main = () => {
  return (
    <div>
        <Header/>
        <About/>
        <Faq/>
        <Contact/>
        <Footer/>
        <Nav/> 
    </div>
  );
}

export default Main