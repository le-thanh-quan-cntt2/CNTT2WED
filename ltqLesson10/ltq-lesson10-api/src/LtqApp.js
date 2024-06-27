import React from 'react'
import LtqListUsers from './components/LtqListUsers'
import axios from './Api/LtqApi'
import{useEffect,useState}from'react'
export default function LtqApp() {

  const [LtqListUsers,setLtqListUsers]= useState([]);
  //đọc dữ liệu từ api
  const ltqGetAllUsers=async ()=>{
    const ltqResponse= await axios.get("tqUsers");
    console.log("Api Data:",ltqResponse.data);
    setLtqListUsers(ltqResponse.data)
  }

  useEffect(()=>{
    ltqGetAllUsers();
    console.log("State Data:",LtqListUsers);
  },[])

  return (
    <div className='container border my-3'>
      <h1>Làm việc với MockApi</h1>
      <hr/>
      <LtqListUsers renderLtqListUsers={LtqListUsers}/>
    </div>
  )
}
