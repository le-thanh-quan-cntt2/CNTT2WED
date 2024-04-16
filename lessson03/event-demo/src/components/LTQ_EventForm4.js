import React, { Component } from 'react'

export default class LTQ_EventForm4 extends Component {
    constructor(props){
        super(props); 
        this.state={
            name:"Quan Quan"
        }
    }
    handleGetName=()=>{
        alert(this.props.name);
        this.setState({
            name:this.props.name
        })
        
    }
  render() {
    return (
      <div className='alert alert-info'>
        <h2>Lấy dữ liệ từ props</h2>
        <button onClick={this.handleGetName}>Lấy tên</button>
        <h2>Welcomto,{this.state.name}</h2>
      </div>
    )
  }
}
