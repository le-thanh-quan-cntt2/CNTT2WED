import React, { useState } from 'react'

export default function LtqFormTableName(renderLtqTableName) {
    const [ltqid,setLtqid]=useState(renderLtqTableName.ltqid)
    const [ltqTbName,setLtqTbName]=useState(renderLtqTableName.ltqTbName)
    const [ltqTbPhone,setLtqTbPhone]=useState(renderLtqTableName.ltqTbPhone)
    const [ltqTbEmail,setLtqTbEmail]=useState(renderLtqTableName.ltqTbEmail)
    const [ltqTbStartus,setLtqTbStartus]=useState(renderLtqTableName.ltqTbStartus)
  return (
    <div>
      <h2>Form xử lý dữ liệu thêm mới</h2>
      <hr/>
      <form>
      <div className="input-group mb-3">
      <span className="input-group-text" id="ltqid">ltqid</span>
      <input type="text" className="form-control" placeholder="ltqid"
           name='ltqid'
           value={ltqid}
           aria-label="ltqid" 
           aria-describedby="ltqid" />
    </div>
    <div className="input-group mb-3">
      <span className="input-group-text" id="ltqTbName">ltqTbName</span>
      <input type="text" className="form-control" placeholder="ltqTbName"
           name='ltqTbName'
           value={ltqTbName}
          aria-label="ltqTbName" 
           aria-describedby="ltqTbName" />
    </div>
    <div classNames="input-group mb-3">
      <span className="input-group-text" id="ltqTbPhone">ltqTbPhone</span>
      <input type="text" className="form-control" placeholder="ltqTbPhone"
           name='ltqTbPhone'
           value={ltqTbPhone}
          aria-label="ltqTbPhone" 
           aria-describedby="ltqTbPhone" />
    </div>
    <div classNames="input-group mb-3">
      <span className="input-group-text" id="ltqTbEmail">ltqTbEmail</span>
      <input type="text" className="form-control" placeholder="quanlekrn01@gmail.com"
           name='ltqTbEmail'
           value={ltqTbEmail}
           aria-label="ltqTbEmail" 
           aria-describedby="ltqTbEmail" />
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="ltqTbStartus">ltqTbStartus</span>
      <select id='ltqTbStartus' className='form-control'
            name='ltqTbStartus'
            value={ltqTbEmail}>
          <option value={true}>Active</option>
          <option value={false}>Non-Active</option>
      </select>
    </div>
      <button className='btn btn-primary my-3'name='btnLtqSave'>Ltq:Save</button>
      </form>
    </div>
  )
}
