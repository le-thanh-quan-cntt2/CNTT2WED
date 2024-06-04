import logo from './logo.svg';
import './App.css';
import React,{useState}from 'react'
import LtqListTask from './components/LtqListTask';
import LtqTaskAddOrEdit from './components/LtqTaskAddOrEdit';
function App() {
  // mock data
  const ltq_listTasks = [
    {ltq_taskId:2210900057,ltq_taskName:"Lê Thanh Quan", ltq_level:"Small" },
    { ltq_taskId:1,ltq_taskName:"Học lập trình frontend", ltq_level:"Small" },
    { ltq_taskId:2, ltq_taskName:"Học lập trình reactjs",ltq_level:"Medium"},
    { ltq_taskId:3, ltq_taskName:"Lập trình với Frontend - Reactjs",ltq_level:"High"},
    { ltq_taskId:4, ltq_taskName:"Lập trình Fullstack (PHP, Java, NetCore)",ltq_level:"Small"},
   ];
   // sử dụng hàm usestate để lưu trữ trạng thái dữ liệu
   const [tvcLisrTasks,setLtqListTasks]= useState(ltq_listTasks);
   const ltqHandleChage=(ltqParam)=>{
    console.log("App:",ltqParam);
    setLtqListTasks(prev=>{
      return{
        ...prev,
      }
    })
   }
  return (
    <div className="container border">
      <h1> Lê Thanh Quan-K22CNTT2</h1>
      <hr/>
      <div>
        {/* Danh sách list task*/}
        <LtqListTask rederLtqListTasks ={ltq_listTasks}/>
      </div>
      <div>
      <LtqTaskAddOrEdit ltqOnsubmit={ltqHandleSubmit}/>
      </div>
    </div>
  );
}

export default App;
