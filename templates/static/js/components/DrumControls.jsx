import React, { Component, Fragment } from 'react';

import MuteButton from '../tiles/buttons/MuteButton.jsx'
import SoloButton from '../tiles/buttons/SoloButton.jsx'

class DrumControls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            muted: [false,false,false,false,false,false,false,false]
        };
        this.handleMuteButton=this.handleMuteButton.bind(this)
    };

    handleMuteButton(e, iter) {
        let mutes = this.state.muted
        mutes[iter] = !mutes[iter]
        if(!mutes[iter]) {
            this.props.handleVolumeChange(iter,this.props.drum_volumes[iter],mutes);
        } else {
            this.props.handleVolumeChange(iter,0.01,mutes);
        }
        this.setState({ muted: mutes })
    }

    render() {
        let drum_buttons = [<div className="drum-container-grid-items" key="blank"></div>]
        this.props.drums.forEach((drum, i) => {
            drum_buttons.push(
                <div className="drum-controls-grid-container drum-container-grid-items" key={i}>
                    <div className="drum-controls-button-item">
                        <MuteButton 
                            handleMuteButton={this.handleMuteButton}
                            iter={i}
                        />
                    </div>
                    <div className="drum-controls-button-item">
                        <SoloButton />
                    </div>
                    <div className="drum-controls-button-item">
                        Clear
                    </div>
                    <div className="drum-controls-button-item">
                        Rand
                    </div>
                    <div className="drum-controls-slider-item">
                        <input type="range" min="1" max="100" defaultValue="50" className="slider" id="myRange" />
                    </div>
                </div>
            );
        });

        return(
            <Fragment>
                {drum_buttons}
            </Fragment>
        );
    };
};

export default DrumControls;