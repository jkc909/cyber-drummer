import React, { Component } from 'react';
import VolumeKnob from '../tiles/buttons/VolumeKnob.jsx';

class MasterVolumeControl extends Component {
    constructor(props){
        super(props);
        this.state={

        };
    };
    render() {
        return(
            <div>
                VOLUME
                <VolumeKnob />
            </div>
        );
    };
};

export default MasterVolumeControl;