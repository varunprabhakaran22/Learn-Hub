//Importing the required packages for this component
import React,{ Component } from 'react'
import Input from '../Input/Input.jsx'
import axios from 'axios'
import Card from '../Card/Card.jsx'
import Detail from '../Details/Details.jsx'
import Load from '../Load/Load.jsx'
import './Search.css'


class Search extends Component{

    //Creating the states and init the values
    constructor(){
        super()
        this.state = {
            data : [],
            result :[],
            loading:false
        }
    }

    //Using the class life cycle method calling the app and getting the required data
    componentDidMount(){
        this.setState({loading : true})
        axios.get('https://cors-anywhere.herokuapp.com/https://nut-case.s3.amazonaws.com/coursessc.json',{
            headers:{
                "Access-Control-Allow-Origin":"*",
            }
        })

        //Once after getting the api setting the obtained result to the states using the setState method
        .then(res => this.setState({
            data : res.data,
            loading : false 
        }))

        //Catch statement to catch the errors
        .catch(err => console.log(err))
    }

    
    //Method to update the state value
    setResult = (result) => {
        this.setState({
            result
        }) 
    }

    //Method to update the state value
    setLoading = () => {
        this.setState({
            loading : !this.state.loading
        })
    }

    //Taking the props value out using destructive method
    //If filter is empty diaplaying all the values in homepage else display only the filtered result
    render(){
        const { type,data,result,loading } = this.state
        let listItems = result.length > 0 ? result : data
        let displayList = listItems.map(list => <Card key={list["Course Id"]} list={list}/>)
        return (
            <div>
                <Input data={ data } setResult={this.setResult} setLoading={this.setLoading} />
                <Detail total={data.length} found={displayList.length}/>
                {
                    loading ? <Load />
                    :
                    <div className="cardHolder">
                        {
                            displayList
                        }
                    </div>
                }
            </div> 
        )
    }
}

export default Search