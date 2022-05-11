import React, { useState, useEffect } from 'react';
import Button from './components/Button'
import Top from './components/Button'
import {connect} from 'react-redux';

import './App.css';
import "./index.css";



function App(props) {


  return (
    <div className="App">
      <Button
        text={"My Button tyhjtyh"}
        disabled={false}
        color={"primary"}
        variant={"contained"}
        // onClick={(e)=>onClick(e, actions)}
      />
      <Top/>
    </div>
   
  );
}

function matchStateToProps(state){
  return {
    product: state.product
  }
}
export default connect(matchStateToProps)(App);
