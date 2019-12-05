//Importing the required packages for this component
import React,{ useState } from 'react'
import axios from 'axios'
import './Input.css'

const Input = (props) => {
    const [input,setInput] = useState('');
    const datas = props.data
    let { setResult,setLoading } = props;
    let filterData = async () => {
        let result;
        setLoading()

        //If  user search input is not empty then try to match the search result with api data   
        if(input !== ''){
            result = await datas.filter( data => data.Provider.toLowerCase().includes(input))

            //If the user input is not matching with api provider (attribute) then search with child subject (attribute)
            if(result.length <= 0){
                result = await datas.filter(data => data['Child Subject'].toLowerCase().includes(input))
            }
            setResult(result)
            setLoading()
        }
        else
            setLoading()
    }
    return (

        //User input search box 
        <div className="input">
            <input type="text" 
            className="inputBox" 
            placeholder="Search Provider or Subject " 
            onChange={event => setInput(event.target.value)}/>
            <button className="button" onClick={filterData}><i className="fa fa-search"></i></button>
        </div>
    )
}

export default Input