import React from 'react'
import './Card.css'
export const Card = (props) => {
    let listItem = props.list
    return (
        <div className="cardItem">
            <div className ="card" style={{width : "18rem"}}>
                <div className ="card-body">
                    <h5 className ="card-title">{listItem["Course Name"]}</h5>
                    <p className ="providerName"><b>Provider </b>:<span> {listItem["Provider"]?listItem["Provider"]:'N/A'}</span></p>
                    <p className ="providerName"><b>Universities/Institutions </b>:<span> {listItem["Universities/Institutions"]?listItem["Universities/Institutions"]:'N/A'}</span></p>
                    <p className ="providerName"><b>Parent Subject </b>:<span> {listItem["ParentSubject"]?listItem["ParentSubject"]:'N/A'}</span></p>
                    <p className ="providerName"><b>Next Session Date </b>:<span> {listItem["Next Session Date"]?listItem["Next Session Date"]:'N/A'}</span></p>
                    <p className ="providerName"><b>Length </b>:<span> {listItem["Length"]?listItem["Length"]:'N/A'}</span></p>
                    <a href={listItem["Video(Url)"]} className ="btn btn-primary">Watch Now</a>
                </div>
            </div>
        </div>
    )
}

export default Card;