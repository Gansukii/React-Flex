import React from 'react'



function ListItem(props){
    return(
        <li>
            <a href = {props.link}>
                {props.value} 
            </a>
        </li>
    )
}

export default ListItem