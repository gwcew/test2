import React, {useEffect} from 'react';
import { Grid } from '@material-ui/core';
import VideoBlick from './VideoBlock';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setAccessType} from '../../redux/actions';
import PropTypes from 'prop-types';
import {ACCESS_TYPE_DEFAULT} from 'components/LoginForm/AccessTypes'
import Placeholder from './Placeholder';

function VideoGrid({videocontent, handleAccessType}) {
  const accessType = localStorage.getItem('accessType');

  if (accessType === undefined || accessType === null) {
    accessType = ACCESS_TYPE_DEFAULT;
  }

  useEffect(() => handleAccessType(accessType), [])

  const handleGeneratingItems = () => {
    if (videocontent.searchOutput.length === 0 
      && videocontent.searchStatus.length === 0) {
      return videocontent.content.map((element, index) => 
      element.accessType <= Number(videocontent.accessType) 
      ? <VideoBlick key={index} width={3} videoData={element}/>
      : null);
    }

    if (videocontent.searchOutput.length !== 0) {
      return videocontent.searchOutput.map((element, index) => <VideoBlick key={index} width={3} videoData={element}/>);
    }

    if (videocontent.searchOutput.length === 0 && videocontent.searchString.length !== 0) {
      return <Placeholder></Placeholder>;
    }

    return videocontent.content.map((element, index) => 
    element.accessType <= Number(videocontent.accessType) 
    ? <VideoBlick key={index} width={3} videoData={element}/>
    : null);
  };

  return (
    <Grid container spacing={2}>
      {handleGeneratingItems()}
    </Grid>
  );
}

function mapStateToProps(state) {
  return {
    videocontent: state.gridvideo,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleAccessType: setAccessType,
  }, dispatch);
}

VideoGrid.propTypes = {
  videocontent: PropTypes.object,
  handleAccessType: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoGrid);
