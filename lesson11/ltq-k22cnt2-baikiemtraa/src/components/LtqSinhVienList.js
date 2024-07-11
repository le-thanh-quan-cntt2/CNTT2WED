import React from 'react'

export default function LtqSinhVienList( renderLtqSinhVienList) {
    console.log("LtqSinhVienList:",renderLtqSinhVienList);
    // hiển thị dữ liệu
    let ltqElementList=renderLtqSinhVienList.map((LtqSinhVien,index)=>{
        return(
            <>
            <tr>
                <td>{LtqSinhVien.id}</td>
                <td>{LtqSinhVien.LtqMaSV}</td>
                <td>{LtqSinhVien.LtqHoSV}</td>
                <td>{LtqSinhVien.LtqTenSV}</td>
                <td>{LtqSinhVien.LtqPhai}</td>
                <td>{LtqSinhVien.LtqNgaySinh}</td>
                <td>{LtqSinhVien.LtqMaKH}</td>
                <td>{LtqSinhVien.LtqHocBong}</td>
                <td>{LtqSinhVien.LtqDiemTrungBinh}</td>
            </tr>
            
            </>
        )
    })
  return (
    <div className='row'>
      <table className='table table-bordered'>
           <thead>
            <tr>
                 <th>id</th>
                <th>LtqMaSV</th>
                <th>LtqHoSV</th>
                <th>LtqTenSV</th>
                <th>LtqPhai</th>
                <th>LtqNgaySinh</th>
                <th>LtqNoisinh</th>
                <th>LtqMaKH</th>
                <th>LtqHocBong</th>
                <th>LtqDiemTrungBinh</th>
            </tr>
           </thead>
           <tbody>
             <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
             </tr>
           </tbody>
      </table>
    </div>
  )
}
