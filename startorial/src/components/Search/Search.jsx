import React,{ Component } from 'react'
import Input from '../Input/Input.jsx'
import axios from 'axios'
import Card from '../Card/Card.jsx'
import Detail from '../Details/Details.jsx'
import Load from '../Load/Load.jsx'
import './Search.css'

class Search extends Component{

    constructor(){
        super()
        this.state = {
            data : [],
            result :[],
            loading:false,
            type:'Next Session Date'
        }
    }

    componentDidMount(){
        this.setState({loading : true})
        axios.get('https://cors-anywhere.herokuapp.com/https://nut-case.s3.amazonaws.com/coursessc.json',{
            headers:{
                "Access-Control-Allow-Origin":"*",
            }
        })
        .then(res => this.setState({
            data : res.data,
            loading : false 
        }))
        .catch(err => console.log(err))
    }

    setType = (type) =>{
        this.setState({
            type
        })
    }

    setResult = (result) => {
        this.setState({
            result
        }) 
    }

    setLoading = () => {
        this.setState({
            loading : !this.state.loading
        })
    }

    render(){
        const { type,data,result,loading } = this.state
        let listItems = result.length > 0 ? result : data
        let displayList = listItems.map(list => <Card key={list["Course Id"]} list={list}/>)
        return (
            <div>
                <Input type={type} data={ data } setResult={this.setResult} setLoading={this.setLoading} />
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