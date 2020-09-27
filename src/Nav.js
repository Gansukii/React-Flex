import React from 'react'
import navbarData from './NavbarData'
import ListItem from './ListItem'
import './nav.css'

function Navbar(){
    const NavbarComponents = navbarData.map(item => <ListItem key={item.id} value={item.value} link={item.link}/>)
    // console.log(NavbarComponents) 

    return (
        <div className="nav-container">
            <ul>
                {NavbarComponents}    
            </ul>
        </div>
    )
}

export default Navbar