import React, { Component, Fragment } from 'react';

import ToggleButton from '@material-ui/lab/ToggleButton';
import Grid from '@material-ui/core/Grid';

const DrumContainer = props => {
    
    let sequence = []
    for(let i=0;i<16;i++){
        sequence.push(
                <div key={i} className = {`seq-step drum-container-grid-items`}>
                    <div key={i} className = {`led`}>{i+1}</div>
                </div>
        )
    }

    let drum_selectors = [<div className="drum-selector-item drum-container-grid-items" key="blank"></div>]

    let drum_buttons = [<div className="drum-button-item drum-container-grid-items" key="blank"></div>]
    

    props.tracks.forEach ((t,i) => {
        let iter = i
        t.forEach ((n,i) => {
            sequence.push( 
                <div key={`trig_${iter}_${i}`} className="drum-container-grid-items">
                    <ToggleButton className="sequence-item" selected={Boolean(n)} value="" onChange={(e)=>props.toggleDrum(iter,i)} > </ToggleButton>
                </div>
            )
        })
        drum_selectors.push(
            <div className="drum-selector-item drum-container-grid-items" key={iter}>
                <select value={props.drums[iter]} onChange={(e) => props.onSelectInstrument(e,iter)}>{props.selections}</select>
            </div>
        )
        drum_buttons.push(
            <div className="drum-button-item drum-container-grid-items" key={iter}>
                Drum buttons
            </div>
        )
    })

    return(
        <div className="drum-container ">
            <Fragment>
                <div className="drum-selector-container drum-container-grid">
                    {drum_selectors}
                </div>
                <div className="sequence-container drum-container-grid">
                    {sequence}
                </div>
                <div className="drum-selector-container drum-container-grid">
                    {drum_buttons}
                </div>
            </Fragment>
        </div>
    )
}

export default DrumContainer;