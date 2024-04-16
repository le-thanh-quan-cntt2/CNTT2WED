import React, { Component } from 'react'

export default class LTQ_EventForm1 extends Component {
      // ham su lys su kien
      evetHandleClick1 = ()=>{
          alert("event handle 1")
       }
      evetHandleClick2(){
           alert("Even Click 2")
       }
    render() {
      return (
  <div className='alert alert-danger'>
    <h2>Event handle</h2>
    {/*goi ham su ly su kien khi rander*/}
    <button onClick={this.evetHandleClick1()}>Click 1</button>
    {/*/goi ham su ly click */}
    <button onClick={this.evetHandleClick2}>Click 2</button>
    </div>
    )
            }
}
