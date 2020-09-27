import React from 'react'
import Navbar from './Nav.js'
import SideNav from './SideNav'
import Footer from './Footer'
import './main-content.css'

function App() {
  return (
    <div className="main-container">
      <Navbar /> 
      <div className="main">
        <SideNav />
        Main
      </div>
      <Footer />
    </div>
  );
}

export default App;
