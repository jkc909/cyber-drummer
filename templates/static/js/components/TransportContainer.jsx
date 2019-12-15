import React, { Component } from 'react';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Button from '@material-ui/core/Button';

import PlayButton from '../tiles/buttons/PlayButton.jsx'
import StopButton from '../tiles/buttons/StopButton.jsx'
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
                <StopButton 
                    stopLoop={this.props.stopLoop}

                />
            <BpmContainer 
                bpm={this.props.bpm}
                setBpm={this.props.setBpm}
            />
            </div>
        );
    };
};

export default TransportContainer;