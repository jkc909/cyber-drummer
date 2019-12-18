import React, { Component, Fragment } from 'react';

class DrumControls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    };
    render() {
        let drum_buttons = [<div className="drum-container-grid-items" key="blank"></div>]
        this.props.drums.forEach((drum, i) => {
            drum_buttons.push(
                <div className="drum-controls-grid-container drum-container-grid-items" key={i}>
                    <div className="drum-controls-button-item">
                        Mute
                    </div>
                    <div className="drum-controls-button-item">
                        Solo
                    </div>
                    <div className="drum-controls-button-item">
                        Clear
                    </div>
                    <div className="drum-controls-button-item">
                        Rand
                    </div>
                    <div className="drum-controls-slider-item">
                        <input type="range" min="1" max="100" value="50" className="slider" id="myRange" />
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