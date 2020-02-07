import React from 'react'
const Showlist=(props)=>{
    return(<>
    <h1>
        <ul>
            {props.data.map((b,i)=><li key={i}>{b}</li>)}
        </ul>
    </h1>
    </>)

}
export default Showlist