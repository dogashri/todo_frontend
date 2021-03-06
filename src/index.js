import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Showlist from './showlist'
import netcall from './networkinglayer/axiosfunc'
// import insertdata from './axiosfunc'

const Abc=()=>{
    const [a,setarray]=useState([])
    useEffect(()=>{
        netcall.getdata().then(
            (res)=>{
                setarray(res)
            }
        )
    },[])
    
    const handler1=(event)=>{
        netcall.insertdata(b)
        
        setarray(a.concat(b))
        
    }
    const [b,setb]=useState("")
    const handler2=(event)=>{
         setb(event.target.value)
    
    }
    const handler3=(event)=>{
        console.log(event.target.id)
        netcall.insertid(event.target.id)
        setarray(a)
    }

    return(<>
    <Showlist data={a} hand={handler3}/>
    <button onClick={handler1}>submit</button>
    <input onChange={handler2}></input>
    </>
    )
}



ReactDOM.render(<Abc />, document.getElementById('root'));