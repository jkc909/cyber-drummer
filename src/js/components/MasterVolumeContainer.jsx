import React, { Component } from 'react';
import MasterVolumeControl from './MasterVolumeControl.jsx'

class MasterVolumeContainer extends Component{
    render() {
        return(
            <div className="master-volume">
                <MasterVolumeControl 
                    value={this.props.reverb_value}
                    handleChange={this.props.handleReverbChange}
                />
                <MasterVolumeControl 
                    value={this.props.master_volume}
                    handleChange={this.props.handleMasterVolumeChange    }
                />
                <div>Master Reverb</div>
                <div>Master Volume</div>
            </div>
        )
    };
};

export default MasterVolumeContainer;