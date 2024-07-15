import React from 'react'

export default function LtqListTableName({renderLtqListTableName}) {
    console.log("list:",renderLtqListTableName);
    // Hiển thị dữ liệu
    const ltqElementTableName=renderLtqListTableName.map((ltqItem,ltqIndex)=>{
        return(
           <tr key={ltqIndex}>
            <td>{ltqItem.ltqid}</td>
            <td>{ltqItem.ltqTbName}</td>
            <td>{ltqItem.ltqTbEmail}</td>
            <td>{ltqItem.ltqTbPhone}</td>
            <td>{ltqItem.ltqTbStartus?"Active":"Non-Active"}</td>
            <td>
                <button className='btn btn-success m-2'>ltq-edit</button>
                <button className='btn btn-danger'
                  onClick={(ev)=>ltqHandleDelete(ltqItem.ltqid)}
                >ltq-delete</button>
            </td>
           </tr>
        );
    })
  return (
    <div>
      <h2>Danh sách thông tin....</h2>
      <hr/>
      <table className='table table-bordered'>
           <thead>
            <tr>
                <th>ltqid</th>
                <th>ltqTbName</th>
                <th>ltqTbEmail</th>
                <th>ltqTbPhone</th>
                <th>ltqTbStartus</th>
                <th>ltq:chức năng</th>
            </tr>
           </thead>
           <tbody>

           </tbody>
      </table>
    </div>
  )
}
