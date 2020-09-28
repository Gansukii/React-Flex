import React from 'react'
import sidenavData from './SideNavData'
import ListItem from './ListItem'
import './sideNav.css'

function SideNav(){
    const SideNavComponent = sidenavData.map(item => <ListItem key={item.id} value={item.value} link={item.link} />)
    return (
        <div className='sideNav-container'>
            <ul className='sideNav-ul'>
                <p className='sideNav-p'>Aliquip tempor cupidatat nisi consectetur dolor ad 
                    ex sint Lorem ad et dolore occaecat et.
                </p>
                {SideNavComponent}
                <p className='sideNav-p'>Eu commodo sunt nulla non sit laboris velit.
                </p>
            </ul>
        </div>
    )

}

export default SideNav