import React, { Component, Fragment } from 'react';

import TrigButton from '../tiles/buttons/TrigButton'

class DrumSequencer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tracks: props.tracks
        };
    };

    handleTrigToggle(track, step) {
        let a=this.state.tracks;
        a[track][step] = !a[track][step]
        this.props.toggleDrum(a)
        this.setState({ tracks: a })
    }

    render() {

        let leds = []
        for(let i=0;i<16;i++){
            leds.push(
                <div key={i} className = {`seq-step drum-container-grid-items`}>
                        <div key={i} className = {`led`}>{i+1}</div>
                </div>
            )
        }
        
        let sequence = [leds]

        this.props.tracks.forEach ((t,i) => {
            let iter = i
            let track=[]
            t.forEach ((n,i) => {
                track.push( 
                    <div key={`trig_${iter}_${i}`} className="trigs drum-container-grid-items">
                        <TrigButton 
                            selected={Boolean(n)} 
                            toggleDrum={(e)=>this.handleTrigToggle(iter,i)} 
                        /> 
                    </div>
                )
            })
            sequence.push(track)
        })
    
        let full_trigs_container = []
    
        sequence.forEach((s,iter) => {
            full_trigs_container.push(
                <div className={`${(iter===0) ? 'led-wrapper' : 'sequence-container'} drum-container-grid`} key={iter}>
                    {s}
                </div>
            )
        });
        return (
            <Fragment>
                {full_trigs_container}
            </Fragment>
        );
    };
};

export default DrumSequencer;
