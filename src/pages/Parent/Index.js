import React from 'react';
import {connect} from 'react-redux'
import {HashRouter as Router, Link, Route} from 'react-router-dom'
import loadable from '@loadable/component'

import '../../App.css';

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  // window 变量使用方式
  //   window.location.href = 'http://www.baidu.com'
  render() {
    return (<div className="App">
        <header className="App-header">
          Parent
          <Router>
            <Link to="/parent">go Parent</Link><br/>
            <Link to={`/parent/child`}>go Child</Link>
          </Router>
        </header>
        <Route path={`/parent/child`} component={loadable(() => import('../Child/Index.js'))}/>
      </div>
    )
  }

}

export default connect()(Index);
