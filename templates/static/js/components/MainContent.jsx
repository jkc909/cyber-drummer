import React, { Component } from 'react';
import MIDISounds from 'midi-sounds-react';

import Grid from '@material-ui/core/Grid';

import { Typography } from '@material-ui/core';

import DrumContainer from './DrumContainer.jsx'
import BpmContainer from './BpmContainer.jsx'
import TransportContainer from './TransportContainer.jsx'


// I LIKE THIS FONT https://fonts.google.com/specimen/Orbitron

const O = 12;

const C = 0;
const c = 1;
const D = 2;
const d = 3;
const E = 4
const F = 5;
const f = 6;
const G = 7;
const g = 8;
const A = 9;
const a = 10;
const B = 11;

const S1 = 5 * O + E;
const S2 = 4 * O + B;
const S3 = 4 * O + G;
const S4 = 4 * O + D;
const S5 = 3 * O + A;
const S6 = 3 * O + E;

const X3 = 3 * O + G;
const X4 = 3 * O + D;
const X5 = 2 * O + A;
const X6 = 2 * O + E;

const _Em = [
	S6 + 0
	, S5 + 2
	, S4 + 2
	, S3 + 0
	, S2 + 0
	, S1 + 0
];


class MainContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            drums: [2,17,35,66,99],
            hit:56,
            bass:437, 
            synth:521,
            tracks:[
                [true,false,false,false,true,false,false,false,true,false,false,false,true,false,false,false],
                [false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false],
                [false,false,true,false,false,false,true,false,false,false,true,false,false,false,true,false],
                [false,false,true,false,false,false,true,false,false,false,true,false,false,false,true,false],
                [false,false,true,false,false,false,true,false,false,false,true,false,false,false,true,false],
            ],
            data:[],
            bpm:120,
            volumes: [.07,.07,.07],
            
        };
        this.beats=[];
        this.setBpm = this.setBpm.bind(this);
        this.playLoop = this.playLoop.bind(this);
        this.stopLoop = this.stopLoop.bind(this);
        this.toggleDrum = this.toggleDrum.bind(this);
        this.onSelectInstrument = this.onSelectInstrument.bind(this);
    };

    componentDidMount(){
        this.setState({ initialized: true });
    };

    handleVolumeChange(value){
        ""
    };

    playLoop(){
        let bpm = this.state.bpm;
        let bps = 60/bpm;
        
        this.fillBeat();
        this.stopLoop();
        document.documentElement.style.setProperty("--anim8-time", `${bps}s`);
        document.documentElement.style.setProperty("--anim8-time-seq", `${bps*4}s`);
        for(let i=1;i<17;i++) {
            document.documentElement.style.setProperty(`--seq-${i}`, `${(i-1) * (bps/4)}s` );
        }
        document.documentElement.style.setProperty("--anim8", "blinker");
        this.midiSounds.startPlayLoop(this.beats, bpm, 1/16)
    }

    stopLoop(){
        let oldone = document.querySelector("div.tempo-blink");
    
        let newone = oldone.cloneNode(true);
        oldone.parentNode.replaceChild(newone, oldone)
        let oldsteps = document.querySelectorAll("div.seq-step");
        oldsteps.forEach( s => {
            let node = s.cloneNode(true);
            s.parentNode.replaceChild(node,s);
        })
        document.documentElement.style.setProperty("--anim8", "none");
        this.midiSounds.stopPlayLoop();
    }



    fillBeat(){
        for(let i=0;i<16;i++){
            let drums=[];
            this.state.tracks.forEach((track, iter) => {
                if(this.state.tracks[iter][i]){drums.push(this.state.drums[iter]);}
            });
            let beat=[drums,[]];
            
            this.beats[i]=beat;
        }
    }

	createSelectItems() {
		if (this.midiSounds) {
			if (!(this.items)) {
				this.items = [];
				for (let i = 0; i < this.midiSounds.player.loader.drumKeys().length; i++) {
					this.items.push(<option key={i} value={i}>{'' + (i + 0) + '. ' + this.midiSounds.player.loader.drumInfo(i).title}</option>);
				}
			}
			return this.items;
		}
	}

	onSelectInstrument(e,iter){
		var list=e.target;
        var n = list.options[list.selectedIndex].getAttribute("value");		
		this.midiSounds.cacheDrum(n);
        var me=this;
        let drums = this.state.drums
        drums[iter]=n
		this.midiSounds.player.loader.waitLoad(function(){
			me.setState({
				drums: drums
			});
			me.fillBeat();
			});
	}

    toggleDrum(track,step){
        let a=this.state.tracks;
        a[track][step] = !a[track][step];
        this.setState({tracks:a});
        this.fillBeat();
    }

    echoToggle(){
        this.midiSounds.setEchoLevel(.1)
    }

    setBpm(bpm){
        this.setState({ bpm: bpm },this.playLoop)
    }

    playThing(){
        let data=[
            [[this.state.drums[0],this.state.drums[1]],[[this.state.bass,[O*3+C],1/16],[this.state.hit,[O*5+C],1/4],[this.state.synth,[O*3+C],1/1],[this.state.synth,[O*4+C],1/1],[this.state.synth,[O*3+G],1/1],[this.state.synth,[O*5+C],1/2],[this.state.synth,[O*5+d],3/8]]]
        ]
        this.midiSounds.startPlayLoop(data, 120, 1/4, this.midiSounds.beatIndex);
    }
    
    render() {
        let selections = this.createSelectItems()

        return (
            <div className="main-container">
                <div>
                    <DrumContainer 
                        tracks={this.state.tracks}
                        drums={this.state.drums}
                        toggleDrum={this.toggleDrum}
                        onSelectInstrument={this.onSelectInstrument}
                        selections={selections}
                    />
                    <TransportContainer 
                        playLoop={this.playLoop}
                        stopLoop={this.stopLoop}
                        bpm={this.state.bpm}
                        setBpm={this.setBpm}
                    />
                </div>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                </Grid>
                <div>
                    <div className="hide-div">
                        <MIDISounds ref={(ref) => (this.midiSounds = ref)} instruments={[this.state.bass,this.state.synth]} drums={this.state.drums}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainContent;