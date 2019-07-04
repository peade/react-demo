import React from 'react';
// import {Redirect} from 'react-router-dom'
import '../../App.css';
import logo from '../../logo.svg'
import {HashRouter as Router, Link} from 'react-router-dom'

class Index extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
      name: 111
    }
  }

  goTo() {
    this.props.history.push('/home?name=aaa')
  }

  evTwo(pa, event) {
    // event 在往里传参数时不需要显性传入
    // event 事件，react有自己的事件对象，不是直接绑定到元素上的。
    // 要获取原始的event，需要执行event.persit()
    event.persist()
    console.log(pa)
    console.log(event)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <Router>
            <Link to="/">Index</Link><br/>
            <Link to="/home">Home</Link><br/>
            <Link to="/parent">Parent</Link><br/>
          </Router>
        </header>
        <button onClick={this.goTo.bind(this)}>go Home</button>
        <button onTouchStart={this.evTwo.bind(this, '11111')}>事件2</button>
      </div>
    );
  }
}

export default Index;
