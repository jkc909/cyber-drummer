import React, { Component, Fragment } from 'react';

import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import VolumeUp from '@material-ui/icons/VolumeUp';

class DrumVolumeControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            volume: props.volume,
        };
    };

    handleSliderMove(e, value) {
        let vol = value/10
        if (vol === .1 ) {vol=vol/10}
        this.props.handleVolumeChange(this.props.iter, vol)
        this.setState({ volume: vol })
    }
    render() {
        return(
            <Fragment>
                <Grid container spacing={1}>
                    <Grid item xs>
                        <Slider 
                            value={this.state.volume*10} 
                            onChange={(e,value)=>this.handleSliderMove(e,value)} 
                            min={1}
                            max={10}
                            className="drum-volume-slider"
                        />
                    </Grid>
                    <Grid item>
                        <VolumeUp style={{ color: "white" }}/> 
                    </Grid>
                </Grid>
            </Fragment>
        )
    }
};

export default DrumVolumeControl;