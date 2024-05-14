import React, { createContext, useContext, useState } from 'react'
import LtqUseContext1 from './LtqUseContext1';
export const ThemeContext=createContext();// Tạo ngữ cảnh để chia sẻ
export default function LtqUseContext() {
     //state
     const[theme,setTheme]=useState('red');

     //Hàm thay đổi theme
     const ltqHandleChange=()=>{
      setTheme(theme==='red'?'blue':'red')

     }
    return (
    <ThemeContext.Provider value={theme}>
    <div className='aler'>
      <h2>Demo UseContext</h2>
      <LtqUseContext1/>
      <button onClick={ltqHandleChange}>Change bgcolor</button>
    </div>
    </ThemeContext.Provider>
  )
}
