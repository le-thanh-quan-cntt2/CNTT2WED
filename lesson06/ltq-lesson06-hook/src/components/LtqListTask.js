import React from 'react'

export default function LtqListTask() {
    console.log(renderLtqListTasks);
    // render dât
    let ltqElementTask=renderLtqListTasks.map((task,index)=>{
  return (
    <>
      <tr key={index}>
        <td>{index+1}</td>
        <td>{task.ltq_taskID}</td>
        <td>{task.ltq_taskName}</td>
        <td>{task.ltq_level}</td>
        <td>{task.ltq_level}</td>
        <td>
            <button className='btn btn-success'>Edit</button>
            <button className='btn btn-danger'>Remove</button>
        </td>
      </tr>
    </>
  )
    })
   return(
    <div>
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
