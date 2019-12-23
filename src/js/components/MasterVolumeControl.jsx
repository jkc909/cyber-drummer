import React, { Component } from 'react';
import Slider from '@material-ui/core/Slider'

class MasterVolumeControl extends Component {
    constructor(props){
        super(props);
        this.state={
            value: (this.props.value * 10)
        };
    };

    handleSliderMove(e,value){
        this.props.handleChange(value/10)
        this.setState({ value: value })
    }

    render() {
        return(
            <div>
                <Slider 
                    value={this.state.value}
                    onChange={(e,value)=>this.handleSliderMove(e,value)}
                    min={0}
                    max={10}
                    className='master-slider'
                    orientation="vertical"
                    style={{height: '75px'}}
                />
                {/* <input className='eq-slider' type="range" min={0} max={10} value={this.state.value} onChange={e=>this.handleSliderMove(e)}></input> */}
            </div>
        );
    };
};

export default MasterVolumeControl;