import React, { Component } from 'react';

class EqualizerSliders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    };

    render() {
        
        return(
            <div>
                <input type="range" min={-30} max={30} value={this.props.value} onChange={e=>this.props.handleSliderMove(e,this.props.iter)}></input>
            </div>
        )
    }
}

export default EqualizerSliders;