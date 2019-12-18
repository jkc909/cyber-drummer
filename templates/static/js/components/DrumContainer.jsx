import React, { Component, Fragment } from 'react';

import DrumSelectors from './DrumSelectors.jsx'
import DrumControls from './DrumControls.jsx'
import DrumSequencer from './DrumSequencer'

const DrumContainer = props => {

    let drum_selectors = [<div className="drum-selector-item drum-container-grid-items" key="blank"></div>]
    
    let drum_buttons = [<div className="drum-container-grid-items drum-button-item" key="blank"></div>]

    props.tracks.forEach ((t,i) => {
        drum_selectors.push(
            <DrumSelectors 
                key={i}
                iter={i}
                selected={props.drums[i]}
                onSelectInstrument={props.onSelectInstrument}
                selections={props.selections}
            />
        )
        drum_buttons.push(
            <div className="drum-button-item drum-container-grid-items" key={i}>
                Drum buttons
            </div>
        )
    })
    
    return(
        <div className="drum-container ">
            <div className="drum-selector-container drum-container-grid">
                {drum_selectors}
            </div>
            <div className="total-sequence-wrapper drum-container-grid">
            <DrumSequencer 
                tracks={props.tracks}
                toggleDrum={props.toggleDrum}
            />
            </div>
            <div className="drum-selector-container drum-container-grid">
                {drum_buttons}
            </div>
        </div>
    )
}

export default DrumContainer;