import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { GridList, GridTile } from 'material-ui/GridList';
import Dialog from 'material-ui/Dialog';

import fetchImage from '../actions/fetchImageAction'


class Gallery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
      imageIndex: 0
    };
  }
  componentDidMount() {
    this.props.fetchImage();
  }
  handleDialog(index) {
    this.setState({
      dialogOpen: !(this.state.dialogOpen)
    });
    if (!isNaN(index)) {
      this.setState({
        imageIndex: index
      });
    }
  }

  render() {
    let content = (this.props.images) ? this.props.images.map((image, index) => (
      <GridTile key={ index } title={ image.name } onClick={ () => this.handleDialog(index) }>
        <img src={ image.pano } alt={ image.pano } />
      </GridTile>
    )) : null;
    let imgSrc = "/images/" + (this.state.imageIndex + 1) + ".jpg";
    let dialogContent = (this.props.images) ?
      (<a-scene>
         <a-sky src={ imgSrc }  ></a-sky>
         <a-text font="kelsonsans" value={this.props.images[this.state.imageIndex].name} width="6" position="-2.5 0.25 -1.5"
              rotation="0 15 0"></a-text>
       </a-scene>)
      : null;
    return (
      <div>
        <div className="row">
          <GridList>
            { content }
          </GridList>
        </div>
          { dialogContent }
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