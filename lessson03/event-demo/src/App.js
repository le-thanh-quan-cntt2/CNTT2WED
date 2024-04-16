import React, { Component } from 'react'
import LTQ_EventForm1 from './components/LTQ_EventForm1';
import LTQ_EventForm2 from './components/LTQ_EventForm2';
import LTQ_EventForm3 from './components/LTQ_EventForm3';
import LTQ_EventForm4 from './components/LTQ_EventForm4';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
         <h1>Event Form Demo</h1>
         <LTQ_EventForm1/>
         <LTQ_EventForm2/>
         <LTQ_EventForm3/>
         <LTQ_EventForm4 name="Quan Thanh Lê"/>
      </div>
    );
  }
}


