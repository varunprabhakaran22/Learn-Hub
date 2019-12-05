import React from 'react'
import './Details.css'
const Details = (props) => {
    return (
        <div className="detail">
            <h6>Found : <span>{props.found}</span> / <span>{props.total}</span></h6>
        </div>
    )
}

export default Details