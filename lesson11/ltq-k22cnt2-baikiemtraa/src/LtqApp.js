import React from 'react'
import LtqSinhVienList from './components/LtqSinhVienList';
import axios from "./api/LtqApi"
import {useEffect,useState} from'react';
export default function LtqApp() {

  const[ltqSinhVienList,setLtqSinhVienList]=useState([]);

  // Đọc dữ liệu từ api
  const ltqGetAllUsers = async ()=>{
    const ltqResponse = await axios.get("LtqSinhVien");
    console.log("Api Data:",ltqResponse.data);
    setLtqSinhVienList(ltqResponse.data)
  }
   useEffect(()=>{
    ltqGetAllUsers();
    console.log("State Date:",ltqSinhVienList);
  },[])
  return (
    <div className='container border my-3'>
      <h1>Hiển thị danh sách sinh viên</h1>
      <hr/>
      <LtqSinhVienList renderLtqSinhVienList={ltqSinhVienList} />
    </div>
  )
}
