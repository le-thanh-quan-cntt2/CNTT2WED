import React, { useContext } from 'react'
import { ThemeContext } from './LtqUseContext'

export default function LtqUseContext2() {
    const theme=useContext(ThemeContext);
  return (
    <div className={theme +'m-3'}>
      <h2>LtqUseContext2</h2>
      <p>
        <b>2210900057</b>
        <b>Lê Thanh Quan</b>
        <i>K22CNTT2</i>
      </p>
    </div>
  )
}
