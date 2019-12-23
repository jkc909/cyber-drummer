import React, { Component } from 'react';

class MasterVolumeControl extends Component {
    constructor(props){
        super(props);
        this.state={
            value: (this.props.value * 10)
        };
    };

    handleSliderMove(e){
        this.props.handleChange(e.target.value/10)
        this.setState({ value: e.target.value })
    }

    render() {
        return(
            <div>
                <input className='eq-slider' type="range" min={0} max={10} value={this.state.value} onChange={e=>this.handleSliderMove(e)}></input>
            </div>
        );
    };
};

export default MasterVolumeControl;