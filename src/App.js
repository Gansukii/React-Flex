import React from 'react'
import Navbar from './Nav.js'
import SideNav from './SideNav'
import Card from './MainContent'
import Footer from './Footer'
import './contents.css'

function App() {
  return (
    <div className="main-container">
      <Navbar /> 
      <div className="main">
        <SideNav />
        <Card />  
      </div>
      <Footer />
    </div>
  );
}

export default App;
