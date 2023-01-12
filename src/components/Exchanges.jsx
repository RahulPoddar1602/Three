import React,{useEffect} from 'react'
import axios from "axios"
import {server} from "../index"
const Exchanges = () => {
useEffect(() => {
    const fetchExchanges=async()=>{
        const {data}= await axios.get(`${server}/exchanges`)
    }      
    fetchExchanges()
    }, [])
    
  return (
    <div>Exchanges</div>
  )
}

export default Exchanges