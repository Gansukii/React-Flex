import React from 'react'
import sidenavData from './SideNavData'
import ListItem from './ListItem'
import './sideNav.css'

function SideNav(){
    const SideNavComponent = sidenavData.map(item => <ListItem key={item.id} value={item.value} link={item.link} />)
    return (
        <div className='sideNav-container'>
            <ul className='sideNav-ul'>
                {SideNavComponent}
            </ul>
        </div>
    )

}

export default SideNav