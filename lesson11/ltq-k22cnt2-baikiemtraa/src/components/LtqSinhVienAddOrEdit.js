import React from 'react'


export default function LtqSinhVienAddOrEdit({onLtqClose}) {
    const ltqHandleClose=()=>{
        onLtqClose(failse);
    }
  return (
    <div className='border'>
       <form>
      <div className="input-group mb-3">
      <span className="input-group-text" id="id">Id</span>
      <input type="text" class="form-control" 
            name='id' value={''}
            placeholder="id" aria-label="id" aria-describedby="id"/>
      </div>
      <div className="input-group mb-3">
      <span className="input-group-text" id="LtqMaSV">LtqMaSV</span>
      <input type="text" class="form-control" 
            name='LtqMaSV' value={''}
            placeholder="LtqMaSV" aria-label="LtqMaSV" aria-describedby="LtqMaSV"/>
      </div>
      <div className="input-group mb-3">
      <span className="input-group-text" id="LtqTenSV">LtqTenSV</span>
      <input type="text" class="form-control" 
            name='LtqTenSV' value={''}
            placeholder="LtqTenSV" aria-label="LtqTenSV" aria-describedby="LtqTenSV"/>
      </div>
      <div className="input-group mb-3">
      <span className="input-group-text" id="LtqPhai">LtqPhai</span>
      <input type="number" class="form-control" 
            name='LtqPhai' value={''}
            placeholder="LtqPhail" aria-label="LtqPhai" aria-describedby="LtqPhai"/>
      </div>
      <div className="input-group mb-3">
      <span className="input-group-text" id="LtqNgaySinh">LtqNgaySinh</span>
      <input type="date" class="form-control" 
            name='LtqNgaySinh' value={''}
            placeholder="LtqNgaySinh" aria-label="LtqNgaySinh" aria-describedby="LtqNgaySinh"/>
      </div>
      <div className="input-group mb-3">
      <span className="input-group-text" id="LtqNoisinh">LtqNoisinh</span>
      <input type="text" class="form-control" 
            name='LtqNoisinh' value={''}
            placeholder="LtqNoisinh" aria-label="LtqNoisinh" aria-describedby="LtqNoisinh"/>
      </div>
      <div className="input-group mb-3">
      <span className="input-group-text" id="LtqMaKH">LtqMaKH</span>
      <input type="text" class="form-control" 
            name='LtqMaKH' value={''}
            placeholder="LtqMaKH" aria-label="LtqMaKH" aria-describedby="LtqMaKH"/>
      </div>
      <div className="input-group mb-3">
      <span className="input-group-text" id="LtqHocBong">LtqHocBong</span>
      <input type="date" class="form-control" 
            name='LLtqHocBong' value={''}
            placeholder="LtqHocBong" aria-label="PLtqHocBong" aria-describedby="LtqHocBong"/>
      </div>
      <div className="input-group mb-3">
      <span className="input-group-text" id="LtqDiemTrungBinh">LtqDiemTrungBinh</span>
      <input type="number" class="form-control" 
            name='LtqDiemTrungBinh' value={''}
            placeholder="LtqDiemTrungBinh" aria-label="LtqDiemTrungBinh" aria-describedby="LtqDiemTrungBinh"/>
      </div>
      <button className='btn btn-primary' name='btnLtqSave'>Ghi lại</button>
      <button className='btn btn-danger' onClick={ltqHandleClose}>Đóng</button>
      </form>
    </div>
  )
}
