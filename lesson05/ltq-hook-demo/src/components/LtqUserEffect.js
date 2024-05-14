import React,{useEffect,useState} from 'react'

export default function LtqUserEffect() {
    //State:count
    const [count,setCount]=useState(0);
    //Hàm xử lý sự kiện click me
    const ltqHandleClick=()=>{
        setCount(prev=>prev+1);
    }
    //Sử dụng hàm useEffect để cập nhật lại title:có một tham số
    useEffect(()=>{
        document.title='Lê Thanh Quan: You clicked ${count} times';
        console.log('You click ${count}times');
    });
    //useEffect:Tham số thứ 2 là mảng rỗng
    useEffect(()=>{
        console.log("Chạy lần đầu tiên -một lần");
    
    },[])
    //[deps]
    useEffect(()=>{
       console.log('useEffect count click:',count) 
    },[count])
  return (
    <div>
      <h2>Demo-userEffect :You click{count}times</h2>
      <button onClick={ltqHandleClick}>
        Click me
        </button>
    </div>
  )
}
