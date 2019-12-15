import React, { Component } from 'react';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import Button from '@material-ui/core/Button';

import BpmContainer from './BpmContainer.jsx'

class TransportContainer extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    };
    render(){
        return(
            <div className="transport-container">
                <Button variant="contained" startIcon={<PlayArrowIcon />} onClick={this.props.playLoop} >PLAY</Button>
                <Button variant="contained" startIcon={<StopIcon />} onClick={this.props.stopLoop}>STOP</Button>
            <BpmContainer 
                bpm={this.props.bpm}
                setBpm={this.props.setBpm}
            />
            </div>
        );
    };
};

export default TransportContainer;