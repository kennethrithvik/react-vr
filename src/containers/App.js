import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

import Gallery from './gallery';

class App extends Component {

  render() {
    return (
      <div>
        <AppBar title="React-360" showMenuIconButton={ false } />
        <div className="container-fluid">
          <Gallery />
        </div>
      </div>
      );
  }
}

export default App;
