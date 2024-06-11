import React from 'react'

export default function LtqListTask({renderLtqListTasks,onLtqEdit,onLtqDelete}) {
    console.log(renderLtqListTasks);
    // Hàm xử lý khi sửa
    const LtqHandleEdit=(param)=>{
        console.log("click edit:",param);
        onLtqTaskEdit(param)// Đẩy lên app thông qua props (onLtqTaskEdit)

    }
    // hàm sử lý khi xóa
    const LtqHandlDelete=(param)=>{
        if(window.location.confirm('Bạn có chắc chắn xóa không'))
        onLtqDelete(param)// Đẩy dữ liệu xóa lên trên app.js
    }
    // render data
    let ltqElementTask=renderLtqListTasks.map((task,index)=>{
  return (
    <>
      <tr key={index}>
        <td>{index+1}</td>
        <td>{task.ltq_taskId}</td>
        <td>{task.ltq_taskName}</td>
        <td>{task.ltq_level}</td>
        <td>{task.ltq_level}</td>
        <td>
            <button className='btn btn-success'
            onClick={()=>LtqHandleEdit(task)}
            >Edit</button>
            <button className='btn btn-danger'
            onClick={()=>LtqHandleEdit(task)}
            >Remove</button>
        </td>
      </tr>
    </>
  )
    })
   return(
    <div>
        <h2>Danh sách các nhiệm vụ</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th> STT </th>
                    <th> Task Id </th>
                    <th> Task Name </th>
                    <th> Task Level </th>
                    <th> Action </th>
                </tr>
            </thead>
            <tbody>
                { ltqElementTask}
            </tbody>
        </table>
      
    </div>
  )
}
