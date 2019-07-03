import React from 'react';
import './Index.scss';

class Index extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    console.log(new URLSearchParams(this.props.location.search))
  }

  render() {
    return (<div className="App">
        <header className="App-header">
          Learn React Home
        </header>
      </div>
    )
  }

}

export default Index;
