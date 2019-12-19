import React, { Component, Fragment } from 'react';

import MuteButton from '../tiles/buttons/MuteButton.jsx'
import SoloButton from '../tiles/buttons/SoloButton.jsx'
import DrumVolumeControl from './DrumVolumeControl.jsx'

class DrumControls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            muted: [false,false,false,false,false,false,false,false],
            solo: null,
            drum_volumes: props.drum_volumes,
        };
        this.handleMuteButton=this.handleMuteButton.bind(this);
        this.handleSoloButton=this.handleSoloButton.bind(this);
        this.handleVolumeSlider=this.handleVolumeSlider.bind(this);
    };

    handleMuteButton(e, iter) {
        let mutes = this.state.muted
        mutes[iter] = !mutes[iter]
        if(!mutes[iter]) {
            this.props.handleVolumeChange(iter,this.state.drum_volumes[iter]);
        } else {
            this.props.handleVolumeChange(iter,0.001);
        };
        this.props.handleVolumeState(mutes); // this is wrong
        this.setState({ muted: mutes });
    };

    handleSoloButton(e, iter) {
        this.state.muted=[false,false,false,false,false,false,false,false]
        if(this.state.solo!=null){
            this.state.drum_volumes.forEach((v,i) => {
                this.props.handleVolumeChange(i,v);
            });
            this.setState({ solo: null })
        } else {
            this.state.drum_volumes.forEach((v, i) => {
                if(i!=iter){
                    this.props.handleVolumeChange(i,0.001);
                };
            });
            this.setState({ solo: iter })
        };
    };

    handleVolumeSlider(iter, vol) {
        this.state.drum_volumes[iter]=vol
        this.props.handleVolumeChange(iter,vol)
    }

    
    render() {
        let not_soloed = ''
        let soloed = ''
        if(this.state.solo!=null){
            not_soloed = 'not-soloed'
            soloed = 'soloed'
        };

        
        let drum_buttons = [<div className="drum-container-grid-items" key="blank"></div>]
        this.props.drums.forEach((drum, i) => {
            let solostate= (this.state.solo == i) ? soloed : not_soloed
            drum_buttons.push(
                <div 
                    className={
                        `drum-controls-grid-container 
                        drum-container-grid-items 
                        ${solostate} 
                        ${(this.state.muted[i]) ? "muted" : ''}`
                    }
                    key={i}
                >
                    <div className="drum-controls-button-item">
                        <MuteButton 
                            handleMuteButton={this.handleMuteButton}
                            iter={i}
                            muted={this.state.muted[i]}
                            solostate={solostate}
                        />
                    </div>
                    <div className="drum-controls-button-item">
                        <SoloButton 
                            handleSoloButton={this.handleSoloButton}
                            iter={i}
                            muted={this.state.muted[i]}
                            solostate={solostate}
                        />
                    </div>
                    <div className="drum-controls-button-item">
                        Clear
                    </div>
                    <div className="drum-controls-button-item">
                        Rand
                    </div>
                    <div className="drum-controls-slider-item">
                        <DrumVolumeControl 
                            handleVolumeSlider={this.handleVolumeSlider}
                            iter={i}
                            muted={this.state.muted[i]}
                            solostate={solostate}
                            volume={this.state.drum_volumes[i]}
                        />
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