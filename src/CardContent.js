import React from "react"

function CardContent(props){

    return (
        <div className="card">
            <div>
                <h2>{props.title}</h2>
            </div>
            <hr></hr>
            <div className="card-body">
                {props.body}
            </div>
        </div>
    )

}
 export default CardContent
