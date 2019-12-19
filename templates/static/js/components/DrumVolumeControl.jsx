import React, { Component } from 'react';

class DrumVolumeControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            volume: props.volume
        };
    };

    handleSliderMove(e, iter) {
        let vol = e.target.value/10
        if (vol == .1 ) {vol=vol/10}
        this.props.handleVolumeSlider(iter, vol)
        this.setState({ volume: vol })
    }
    render() {
        return(
            <div>
                <input type="range" min="1" max="10" value={this.state.volume*10} onChange={e=>this.handleSliderMove(e,this.props.iter)} className="slider" id="myRange" />
            </div>
        )
    }
};

export default DrumVolumeControl;