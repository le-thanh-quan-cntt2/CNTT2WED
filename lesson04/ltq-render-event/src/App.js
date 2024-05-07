import React, { Component } from 'react'
import LtqProductList from './components/LtqProductList';
import LtqProductAdd from './components/LtqProductAdd';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      products : [
        { title: 'Lê Thanh Quan', id: 2210900057,status:1},
        { title: 'Cabbage', id: 1,status:1 },
        { title: 'Garlic', id: 2 ,status:0},
        { title: 'Apple', id: 3,status:0 },
        { title: 'Samsung', id: 4 ,status:1},
      ]
    }
  }
  ltqHandlsubmit=(param)=>{
    console.log("App",param);
    //thêm vào mảng dữ liệu products
    let {products}=this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
  render() {
    return (
      <div className='container border mt-5'>
        <h1> Lê Thanh Quan - Render Data - Event Form</h1>
        <hr/>
        <LtqProductList renderProducts={this.state.products}/>
        <hr/>
        <LtqProductAdd onSummit={this.ltqHandlsubmit}/>


      </div>
    )
  }
}
