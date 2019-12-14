import React, { Component } from 'react';

import ToggleButton from '@material-ui/lab/ToggleButton';
import Grid from '@material-ui/core/Grid';

const DrumContainer = props => {
    
    let led_row = []
    for(let i=0;i<16;i++){
        led_row.push(
                <div key={i} className = {`seq-step`}>{i+1}</div>
        )
    }

    let sequence = []
    let drum_selectors = [
        [<div className="drum-selector-item" key="blank">
            
        </div>
        ]
    ]
    props.tracks.forEach ((t,i) => {
        let iter = i
        t.forEach ((n,i) => {
            sequence.push( 
                <div key={`trig_${iter}_${i}`}>
                    <ToggleButton className="sequence-item" selected={Boolean(n)} value="" onChange={(e)=>props.toggleDrum(iter,i)} > </ToggleButton>
                </div>
            )
        })
        drum_selectors.push(
            <div className="drum-selector-item" key={iter}>
                <select value={props.drums[iter]} onChange={(e) => props.onSelectInstrument(e,iter)}>{props.selections}</select>
            </div>
        )
    })

    return(
        <div className="drum-container">
            <div className="drum-selector-container">
                {drum_selectors}
            </div>
            <div className="sequence-container">
                {led_row}
                {sequence}
            </div>
            <div>
                Last DIV omgg
            </div>
        </div>
    )
}

export default DrumContainer;