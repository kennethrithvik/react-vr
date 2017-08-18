import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppBar from 'material-ui/AppBar';

import fetchImage from '../actions/fetchImageAction'


class Gallery extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchImage();
  }

  render() {
    return (
      <div>
        <AppBar title="React-360" showMenuIconButton={ false } />
        <div className="container-fluid">
        </div>
      </div>
      );
  }
}

let mapStateToProps = (state) => {
  return {
    images: state.images.images
  };
}
let mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchImage},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);