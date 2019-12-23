import React, { PureComponent, Fragment } from 'react';
import Slider from '@material-ui/core/Slider';

class EqualizerSliders extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        };
    };

    handleEqSlider(e,value) {
        this.props.handleSliderMove(e,value,this.props.iter)
        this.setState({ value: value })
    }

    render() {
        return(
            <Fragment>
                <Slider 
                    value={this.state.value}
                    onChange={(e,value)=>this.handleEqSlider(e,value)}
                    min={-30}
                    max={30}
                    className='eq-slider'
                    orientation="vertical"
                    style={{height: '75px'}}
                />
                {/* <input className='eq-slider' type="range" min={-30} max={30} value={this.props.value} onChange={e=>this.props.handleSliderMove(e,this.props.iter)}></input> */}
            </Fragment>
        )
    }
}

export default EqualizerSliders;