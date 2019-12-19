import React, { Component } from 'react';
import MIDISounds from 'midi-sounds-react';

import Grid from '@material-ui/core/Grid';

import DrumContainer from './DrumContainer.jsx'
import TransportContainer from './TransportContainer.jsx'
import EqualizerContainer from './EqualizerContainer.jsx'

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
            drums: [160,168,199,99,66,35,17,2],
            drum_volumes: [.7,.7,.7,.7,.7,.7,.7,.7,.7],
            hit:56,
            bass:437, 
            synth:521,
            tracks:[
                [false,true,false,false,false,false,false,true,true,false,false,false,false,false,true,false],
                [false,false,false,true,false,false,false,false,false,true,false,false,true,false,false,false],
                [false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false],
                [false,false,true,false,false,false,true,false,false,false,true,false,false,false,true,false],
                [false,false,false,true,false,false,true,false,false,false,false,true,false,false,true,false],
                [false,false,true,false,false,false,true,false,false,false,true,false,false,false,true,false],
                [false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false],
                [true,false,false,false,true,false,false,false,true,false,false,false,true,false,false,false],
            ],
            data:[],
            bpm:120,
            eq_values: [10,-3,13,0,10,9,10,20],
            
        };
        this.beats=[];
        this.setBpm = this.setBpm.bind(this);
        this.playLoop = this.playLoop.bind(this);
        this.stopLoop = this.stopLoop.bind(this);
        this.toggleDrum = this.toggleDrum.bind(this);
        this.onSelectInstrument = this.onSelectInstrument.bind(this);
        this.handleVolumeChange=this.handleVolumeChange.bind(this);
        this.handleVolumeState=this.handleVolumeState.bind(this);
    };

    componentDidMount(){
        this.setState({ initialized: true });
        this.midiSounds.setEchoLevel(.1);
    };

    shouldComponentUpdate(nextProps, nextState) {
        return !this.state.initialized
    }

    handleVolumeChange(instrument,volume){
        this.midiSounds.setDrumVolume(this.state.drums[instrument],volume)
    };
    
    handleVolumeState(drum_volumes) {
        this.state.drum_volumes=drum_volumes
    }

    playLoop(){
        this.fillBeat();
        this.resetAnimation();
        this.setNewAnimationBpm();
        this.midiSounds.startPlayLoop(this.beats, this.state.bpm, 1/16);
    };

    stopLoop(){
        this.resetAnimation();
        this.midiSounds.stopPlayLoop();
    };

    resetAnimation(){
        let oldone = document.querySelector("div.tempo-blink");
        let newone = oldone.cloneNode(true);
        oldone.parentNode.replaceChild(newone, oldone);
        let oldsteps = document.querySelectorAll("div.seq-step");
        oldsteps.forEach( s => {
            let node = s.cloneNode(true);
            s.parentNode.replaceChild(node,s);
        });
        document.documentElement.style.setProperty("--anim8", "none");
    };

    setNewAnimationBpm(){
        let bpm = this.state.bpm;
        let bps = 60/bpm;
        document.documentElement.style.setProperty("--anim8-time", `${bps}s`);
        document.documentElement.style.setProperty("--anim8-time-seq", `${bps*4}s`);
        for(let i=1;i<17;i++) {
            document.documentElement.style.setProperty(`--seq-${i}`, `${(i-1) * (bps/4)}s` );
        };
        document.documentElement.style.setProperty("--anim8", "blinker");
    };

    fillBeat(){
        for(let i=0;i<16;i++){
            let drums=[];
            this.state.tracks.forEach((track, iter) => {
                if(this.state.tracks[iter][i]){drums.push(this.state.drums[iter]);}
            });
            let beat=[drums,[]];
            this.beats[i]=beat;
        };
    };

	createSelectItems() {
		if (this.midiSounds) {
			if (!(this.items)) {
				this.items = [];
				for (let i = 0; i < this.midiSounds.player.loader.drumKeys().length; i++) {
					this.items.push(<option key={i} value={i}>{this.midiSounds.player.loader.drumInfo(i).title}</option>);
					// this.items.push(<option key={i} value={i}>{'' + (i + 0) + '. ' + this.midiSounds.player.loader.drumInfo(i).title}</option>);
				};
			};
			return this.items;
		};
	};

	onSelectInstrument(e,iter){
		var list=e.target;
        var n = list.options[list.selectedIndex].getAttribute("value");		
		this.midiSounds.cacheDrum(n);
        var me=this;
        let drums = me.state.drums
        drums[iter]=n
        this.state.drums = drums
		this.midiSounds.player.loader.waitLoad(function(){
			me.fillBeat();
			});
	};

    toggleDrum(a){
        this.state.tracks = a
        this.fillBeat();
    };

    echoToggle(){
        this.midiSounds.setEchoLevel(.1);
    };

    setBpm(bpm){
        this.state.bpm = bpm
        this.playLoop()
    };

    
    render() {
        let selections = this.createSelectItems();
        return (
            <div className="main-container">
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <DrumContainer 
                        tracks={this.state.tracks}
                        drums={this.state.drums}
                        toggleDrum={this.toggleDrum}
                        onSelectInstrument={this.onSelectInstrument}
                        selections={selections}
                        drum_volumes={this.state.drum_volumes}
                        handleVolumeChange={this.handleVolumeChange}
                        handleVolumeState={this.handleVolumeState}

                    />
                    <div className="bottom-container-grid">
                        <TransportContainer 
                            playLoop={this.playLoop}
                            stopLoop={this.stopLoop}
                            bpm={this.state.bpm}
                            setBpm={this.setBpm}
                        />
                        <EqualizerContainer 
                            eq_values={this.state.eq_values}
                        />
                    </div>
                </Grid>
                <div>
                    <div className="hide-div">
                        <MIDISounds ref={(ref) => (this.midiSounds = ref)} instruments={[this.state.bass,this.state.synth]} drums={this.state.drums}/>
                    </div>
                </div>
            </div>
        );
    };
};

export default MainContent;