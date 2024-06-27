import React from 'react'

export default function LtqListUsers(renderLtqListUsers) {
    console.log("LtqListUsers:",renderLtqListUsers);
    // hiển thị dữ liệu
    let ltqElementUser=renderLtqListUsers.map((ltqUser,index)=>{
        return(
            <>
            <tr>
                <td>{ltqUser.id}</td>
                <td>{ltqUser.UserName}</td>
                <td>{ltqUser.Password}</td>
                <td>{ltqUser.Email}</td>
                <td>{ltqUser.Phone}</td>
                <td>...</td>
            </tr>
            </>
        )
    })
  return (
    <div className='row'>
       <div className="col -md-12">
       <table className='table table-bordered'>
        <thead>
            <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
            <th>Phone</th>
            </tr>
        </thead>
        <tbody>
       {ltqElementUser}
        </tbody>
       </table>
       </div>
    </div>
  )
}

