import React, { Component } from 'react'

export default class Class_LeThanhQuan extends Component {
    constructor(props){
        super(props);
        this.state={
            fullName:"Le Thanh Quan",
            class:"K22CNTT2"
        }
    }
    users={
        name:"Le Thanh Quan",
        age:20
      }
      //hàm xử lý sự kiện
      handchange=(event)=>{
        this.seState({
            fullName:"Chach Van Doanh",
        })
      }
    render() {
    return (
      <div>
        <h2>Class component Demo</h2>
        {this.users.name} -{this.users.age}

        <hr/>
        <h3>info: {this.props.info}</h3>
        <h3>Tine: {this.props.time}</h3>
        <hr/>
        <h3>State:
            FullName:{this.state.class}
        </h3>
        <button onclick={this.handlechange}>change Name</button>
      </div>
    )
  }
}
