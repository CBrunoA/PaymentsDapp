import React from 'react'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Faq from './components/FAQ/Faq';
import Payments from './components/Payments/Payments';
import Main from './components/Main'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/payments' element={<Payments/>}/>
    </Routes>
    </Router>
  );
}

export default App;
