import React, { useState } from 'react';
import Header from './Header'
import './App.css';
import Nav from './Nav';
import Result from './Result';
import request from './request'
function App() {
  const [selectedaaoption,setselectedaaoption]=useState(request.fetchTrending)
  return (
    <div className="app">

    <Header></Header>
  
    <Nav setselectedaaoption={setselectedaaoption}></Nav>
   
    <Result selectedaaoption={selectedaaoption}></Result>
    </div>
  );
}

export default App;
