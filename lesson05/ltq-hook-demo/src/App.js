import React, { Component } from 'react'
import Ltq_useState from './components/Ltq_useState'
import LtqUserEffect from './components/LtqUserEffect'
import LtqUseContext from './components/LtqUseContext'
import'./App.css'
export default class App extends Component {
  render() {
    return (
      <div className='container border mt-3'>
          <h1 className='text-center'>Lê Thanh Quan-hook</h1>
          <hr/>
          <Ltq_useState/>
          <hr/>
          <LtqUserEffect/>
          <hr/>
          <LtqUseContext/>
      </div>
    )
  }
}
