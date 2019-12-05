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

export default Search