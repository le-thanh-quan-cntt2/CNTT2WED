import React, { useEffect, useState } from 'react'
import LtqListTableName from './ltq_components/LtqListTableName'
import LtqFormTableName from './ltq_components/LtqFormTableName';

export default function LtqApp() {

  //Đọc dữ liệu từ api
  const [ltqListTableName,setLtqListTableName]=useState([])
  const ltqGetTableName=async()=>{
    let ltqRepsp =await axios.get("ltqTableName");
    console.log("App list:", ltqRepsp.data);
    setLtqListTableName(ltqRepsp.data);

  }
  useEffect(()=>{
    ltqGetTableName();
  })

  // Hàm xóa
  const ltqHandleDelete=async(ltqid)=>{
   let ltqRes=await axios.delete("ltqTableName/"+ltqid);
   ltqGetTableName();
  }

  return (
    <div className='container border my-3'>
      <h1> Bài đánh giá hết học phần- Lê Thanh Quan:2210900057</h1>
      <hr/>
      <LtqListTableName renderLtqListTableName={ltqListTableName} onLtqDelete={ltqHandleDelete}/>
      <hr/>
      <LtqFormTableName/>
    </div>
  )
}
