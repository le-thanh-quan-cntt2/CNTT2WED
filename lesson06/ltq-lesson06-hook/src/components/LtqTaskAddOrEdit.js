import React, { useState } from 'react'

export default function LtqTaskAddOrEdit() {
    // Đối tượng task
    const ltqTaskobj ={ 
        ltq_taskId:0, 
        ltq_taskName:"",
        ltq_level:""
    }
    
    const [ltqTask,setLtqTask]=useState(ltqTaskobj);
    // Hàm sử lý sự lý sự kiện thay đổi trên điều kiện
    const ltqHandleChage=(ltqEvent)=>{
        let name = ltqEvent.target.name;
        let value=ltqEvent.target.value;

        setLtqTask(prev=>{
            return{
            ...prev,
            [name]:value,
            }
        })
    }
    const ltqHandleSubmit=(ltqEvent)=>{
        ltqEvent.preventDefault();
        ltqOnSubmit(ltqTask);
    }
  return (
    <div>
      <h2>Thêm mới task</h2>
      <form>
        <div class="input-group mb-3"> 
        <span class="input-group-text" id="basic-addon1">Task ID</span>
        <input type="text"
           name='ltq_taskId' value={ltqTask.ltq_taskIdƯ} onChange={ltqHandleChage}
           class='form-control' placeholder="Username" aria-lable="Usernamr" aria-aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3"> 
        <span class="input-group-text" id="basic-addon1">Task ID</span>
        <input type="text"
           name='ltq_taskId' value={ltqTask.ltq_taskIdƯ} onChange={ltqHandleChage}
           class='form-control' placeholder="Username" aria-lable="Usernamr" aria-aria-describedby="basic-addon1">
            <lable>Tas ID</lable>
            <input name='ltq_TaskId' value={ltqTask.ltq_taskId} onChange={'ltqHandleChage'}></input>
        </div>
        <div>
            <lable>Tas ID</lable>
            <input name='ltq_TaskId' value={ltqTask.ltq_taskId} onChange={'ltqHandleChage'}></input>
        </div>
        <div>
            <lable>Tas Name</lable>
            <input name='ltq_TaskName' value={ltqTask.ltq_taskName} onChange={'ltqHandleChage'}></input>
        </div>
        <div>
            <lable>Tas ID</lable>
            <select name='ltq_level' value={ltqTask.ltq_level} onChange={'ltqHandleChage'}>
                <option value={'Small'}>Small</option>
                <option value={'Small'}>Small</option>
                <option value={'Small'}>Small</option>
            </select>
        </div>
        <button onClick={ltqHandleSubmit}>Ghi lại</button>
      </form>
    </div>
  )
}
