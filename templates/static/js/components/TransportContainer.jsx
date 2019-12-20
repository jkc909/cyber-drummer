import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid'

import PlayButton from '../tiles/buttons/PlayButton.jsx'
import StopButton from '../tiles/buttons/StopButton.jsx'
import BpmContainer from './BpmContainer.jsx'

class TransportContainer extends Component {
    constructor(props){
        super(props);
    };
    render(){
        return(
            <div className="transport-container">
                <Grid container direction="column" justify="center" alignItems="center">
                    <Grid item>
                        <Grid container>
                            <Grid item>
                                <PlayButton 
                                    playLoop={this.props.playLoop}
                                />
                            </Grid>
                            <Grid item>
                                <StopButton 
                                    stopLoop={this.props.stopLoop}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <BpmContainer 
                            bpm={this.props.bpm}
                            setBpm={this.props.setBpm}
                        />
                    </Grid>
            </Grid>
            </div>
        );
    };
};

export default TransportContainer;