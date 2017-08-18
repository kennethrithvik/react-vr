import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { GridList, GridTile } from 'material-ui/GridList';

import fetchImage from '../actions/fetchImageAction'


class Gallery extends Component {

  constructor(props) {
    super(props);
    this.state={};
  }
  componentDidMount() {
    this.props.fetchImage();
  }

  render() {
    let content = (this.props.images) ? this.props.images.map((image, index) => (
      <GridTile key={ index } title={ image.name } >
        <img src={ image.pano } alt={image.pano}/>
      </GridTile>
    )) : null;
    return (
      <div className="row">
        <GridList>
          { content }
        </GridList>
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
  return bindActionCreators({
    fetchImage
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);