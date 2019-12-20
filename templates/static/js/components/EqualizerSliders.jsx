import React, { Component, Fragment } from 'react';

class EqualizerSliders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    };

    render() {
        
        return(
            <Fragment>
                <input className='eq-slider' type="range" min={-30} max={30} value={this.props.value} onChange={e=>this.props.handleSliderMove(e,this.props.iter)}></input>
            </Fragment>
        )
    }
}

export default EqualizerSliders;