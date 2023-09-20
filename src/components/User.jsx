import React from 'react'

function User(props) {
    console.log(props.data.name)
    //console.log(props.data)
   // const {data} = props
  return (
    <div>
    
        <h1>Hello user component</h1>
        {/* <h1>{data.name}</h1>
        <h1>{data.age}</h1>
     */}
     <h1>{props.data.name}</h1>
        <h1>{props.data.age}</h1>
    </div>
  )
}

export default User