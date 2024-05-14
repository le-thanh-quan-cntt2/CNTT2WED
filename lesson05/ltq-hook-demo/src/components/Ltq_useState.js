import React, { useState } from 'react'

export default function Ltq_useState() {
  // Declare a new stae varlable which we'll call "cont"
  const[count,setCount]=useState(10);
  //Mảng
  const[list,setList]=useState([1,5]);

  // Hàm xử lý sự kiện"Thêm ngẫu nhiên"
  const ltqHandleList=()=>{
    //Sinh ngẫu nhiên một giá trị số
    let num=parseInt(Math.random()*100);
    //Cập nhật lại state:list
    setList([
        ...list,
        num
    ])
    // cách khác
   // let list.push(num);
    //setList(list);
  }
    return (
    <div>
      <p>You clicked{count} times</p>
      <button onClick={()=>setCount(count+5)}>
        Click me
      </button>
      <hr/>
      <h3>List:{list.toString()}</h3>
      <button onClick={ltqHandleList}>Thêm ngẫu nhiên</button>
    </div>
  )
}
