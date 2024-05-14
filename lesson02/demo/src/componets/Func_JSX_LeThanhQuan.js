import React from 'react'

export default function Func_JSX_LeThanhQuan(props) {
    const users = {
        name:"Le Thanh Quan",
        age:20
    }
  return (
    <div>
      <h2>Function component Demo</h2>
         <h3>
           Welcome to ,{users.name} - {users.age} 
         </h3>
         <hr/>
         <h3>Props:
          <br>FullName:{props.fullName}</br>
          <br>age:{props.age}</br>
         </h3>

    </div>
  )
}
