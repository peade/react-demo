import React from 'react';
import {connect} from 'react-redux'

function Index() {
  return (
    <div className="App">
      <header className="App-header">
        404 NotFound
      </header>
    </div>
  );
}

export default connect()(Index);
