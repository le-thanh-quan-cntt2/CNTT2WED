import React from 'react'

export default function LTQ_EventForm2() {
    // Dinh ngia cac ham xu ly su kien
    const evetHandleClick1=(content)=>{
        console.log('*************************************');
        console.log(content);
        console.log('*************************************');
    }
  return (
    <div>
      <h2>Event Demo - Funcion Component</h2>
      <button onClick={evetHandleClick1("Le Thanh Quan")}>Goi khi click</button>
      <button onClick={()=>evetHandleClick1("K22CNTT2-ReactJs")}>Goi khi click</button>
    </div>
  )
}
