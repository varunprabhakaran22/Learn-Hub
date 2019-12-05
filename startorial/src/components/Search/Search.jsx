import React,{ Component } from 'react'
import Searchbar from '../searchbar/searchbar.component'
import Input from '../input/input.component'
import axios from 'axios'
import Card from '../card/card.component'
import Detail from '../detail/detail.component'
import Load from '../load/load.component'
import './search.style.css'

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

export default Search