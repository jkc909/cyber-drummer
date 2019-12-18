import React, { Component, Fragment } from 'react';

import DrumSelectors from './DrumSelectors.jsx'
import DrumControls from './DrumControls.jsx'
import DrumSequencer from './DrumSequencer'
import TrigButton from '../tiles/buttons/TrigButton'

const DrumContainer = props => {
    let leds = []
    for(let i=0;i<16;i++){
        leds.push(
            <div key={i} className = {`seq-step drum-container-grid-items`}>
                    <div key={i} className = {`led`}>{i+1}</div>
                </div>
        )
    }
    
    let drum_selectors = [<div className="drum-selector-item drum-container-grid-items" key="blank"></div>]
    
    let drum_buttons = [<div className="drum-container-grid-items drum-button-item" key="blank"></div>]
    
    
    
    let sequence = [leds]

    props.tracks.forEach ((t,i) => {
        let iter = i
        let track=[]
        t.forEach ((n,i) => {
            track.push( 
                <div key={`trig_${iter}_${i}`} className="trigs drum-container-grid-items">
                    <TrigButton 
                        selected={Boolean(n)} 
                        toggleDrum={(e)=>props.toggleDrum(iter,i)} 
                    /> 
                </div>
            )
        })
        sequence.push(track)
        drum_selectors.push(
            <DrumSelectors 
                key={iter}
                iter={iter}
                selected={props.drums[iter]}
                onSelectInstrument={props.onSelectInstrument}
                selections={props.selections}
            />
        )
        drum_buttons.push(
            <div className="drum-button-item drum-container-grid-items" key={iter}>
                Drum buttons
            </div>
        )
    })

    let full_trigs_container = []

    sequence.forEach((s,iter) => {
        full_trigs_container.push(
            <div className={`${(iter===0) ? 'led-wrapper' : 'sequence-container'} drum-container-grid`} key={iter}>
                {s}
            </div>
        )
    });

    
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