import React, { Component } from 'react'
// sử lý sự kiện với props,state
export default class LTQ_EventForm3 extends Component {
    constructor(props){
        super(props);
        // tạo đối tương dữ liệu thông qua state
        this.state={
            name:"Lê Thanh Quan",
            job:"Dev soft"
        }
    }
    //Hàm xử lý sự kiện
    HandleChangeName=(ev)=>{
        this.setState({
            name:"K22CNT2-Reactjs"
        })
    }
    HandleChangejob=(ev)=>{
        this.setState({
            name:"Công nghệ phần mềm",
        })
    }
  render() {
    return (
      <div className='alert alert-prymary'>
        <h2>Thay đổi dữ liệu trong state</h2>
        <p>Dữ liệu:{this.state.name}-{this.state.job}</p>
        <button onClick={this.HandleChangeName}>Thay đổi name</button>
        <button onClick={this.HandleChangejob}>Thay đổi job</button>
      </div>
    )
  }
}
