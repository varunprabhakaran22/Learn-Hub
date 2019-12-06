//Importing the required packages for this component
import React from 'react'

//Functional component 
const Sorting = ( props )=>{
    const { setResult } = props
    let listItem = props.data

    //Method to sort the value based on length
    let sortAsc =()=>{
        let sortedData = listItem.sort((a, b) =>{ return a.Length - b.Length })
        listItem = sortedData 
        setResult(listItem)
    }

    let sortDesc =()=>{
        let sortedData = listItem.sort((a, b) =>{ return b.Length - a.Length })
        listItem = sortedData 
        setResult(listItem)
    }
    return(
        <div> Sort
            <button className="button" onClick={sortAsc}> <i className="fa fa-sort-asc" ></i></button>   
            {/* <button className="button" onClick={sortDesc}> <i className="fa fa-sort-desc" > </i></button> */}
        </div>
    )
}



export default Sorting