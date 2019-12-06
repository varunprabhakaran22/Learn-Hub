//Importing the required packages for this component
import React from 'react'
import './Sort.css'

//Functional component 
const Sorting = ( props )=>{
    const { setResult } = props
    let listItem = props.data

    //Method to sort the value based on length in Ascending Order
    let sortAsc =()=>{
        let sortedData = listItem.sort((a, b) =>{ return a.Length - b.Length })
        listItem = sortedData 
        setResult(listItem)
    }

    //Method to sort the value in Descending order
    let sortDesc =()=>{
        let sortedData = listItem.sort((a, b) =>{ return b.Length - a.Length })
        listItem = sortedData 
        setResult(listItem)
    }

    
    return(
        <div className = "sorting"> Sort
            <button className="button give-space"   onClick={sortAsc}> <i className="fa fa-sort-asc" ></i></button>   
            <button className="button give-space"   onClick={sortDesc}> <i className="fa fa-sort-desc" > </i></button>
        </div>
    )
}



export default Sorting