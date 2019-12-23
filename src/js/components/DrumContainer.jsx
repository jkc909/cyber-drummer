import React from 'react';

import DrumSelectors from './DrumSelectors.jsx'
import DrumControls from './DrumControls.jsx'
import DrumSequencer from './DrumSequencer'

const DrumContainer = props => {

    let drum_selectors = [<div className="drum-container-grid-items" key="blank"></div>]

    props.tracks.forEach ((t,i) => {
        drum_selectors.push(
            <DrumSelectors 
                key={i}
                iter={i}
                selected={props.drums[i]}
                onSelectInstrument={props.onSelectInstrument}
                selections={props.selections}
            />
        );
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
            <div className="drum-controls-wrapper drum-container-grid">
            <DrumControls 
                drums={props.drums}
                drum_volumes={props.drum_volumes}
                handleVolumeChange={props.handleVolumeChange}
            />
            </div>
        </div>
    )
}

export default DrumContainer;