import React from 'react';
import logo from './logo.svg';
import {HashRouter as Router, Link} from 'react-router-dom'
import './App.css';
// React 组件名 需要以大写字母开头
import Routes from './routers/Index.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <Router>
          <Link to="/">Index</Link><br/>
          <Link to="/home">Home</Link><br/>
        </Router>
      </header>
      <Routes/>
    </div>
  );
}

export default App;
