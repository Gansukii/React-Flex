import React from 'react'
import cardData from './CardData'
import CardContent from './CardContent'
import './main.css'


function Card(){
    const CardComponent = cardData.map(data => <CardContent title={data.title} body={data.body} />)
    return(
        <div className="mainContent">
            {CardComponent}
        </div>

    )

}

export default Card
