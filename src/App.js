
import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';

import HomeLayout from './screen/HomeLayout'
import Top from './components/Top'

import './App.css';
import "./index.css";



function App(props) {


  return (
    <div className="App">
      <Top/>
      <HomeLayout/>
    </div>
   
  );
}

function matchStateToProps(state){
  return {
    product: state.product
  }
}
export default connect(matchStateToProps)(App);
