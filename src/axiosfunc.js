import React from 'react'
import axios from 'axios'
const getdata=()=>{
    return axios.get("http://localhost:3336/route1/data")
    .then((res)=>res.data)
}
const insertdata=(data_insert)=>{
    return axios.get("http://localhost:3336/route1/insert/"+data_insert).then((res)=>{console.log(res)})
}
export default {getdata,insertdata}