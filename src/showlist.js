import React from 'react'
const Showlist=(props)=>{
    const Styl={
        color:"red"
    }    
    return(<>
    <h1>
        <ul>
            {props.data.map((b)=><li
            onClick={props.hand}
            key={b._id} 
            id={b._id}
            style={b.important?Styl:null}>{b.data} 
            </li>)
            }
        </ul>
    </h1>
    </>)

}
export default Showlist