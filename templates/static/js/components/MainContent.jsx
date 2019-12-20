import React, { Component } from 'react';
import MIDISounds from 'midi-sounds-react';

import Grid from '@material-ui/core/Grid';

import DrumContainer from './DrumContainer.jsx'
import TransportContainer from './TransportContainer.jsx'
import EqualizerContainer from './EqualizerContainer.jsx'
import MasterVolumeContainer from './MasterVolumeContainer.jsx'

class MainContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            drums: [160,168,199,99,62,36,21,2],
            drum_volumes: [.5,.6,.7,.7,.7,.5,.6,.8],
            hit:56,
            bass:437, 
            synth:521,
            tracks:[
                [false,true,false,false,false,false,false,true,true,false,false,false,false,false,true,false],
                [false,false,false,true,false,false,false,false,false,true,false,false,true,false,false,false],
                [false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false],
                [false,false,true,false,false,false,true,false,false,false,true,false,false,false,true,false],
                [false,false,false,true,false,false,true,false,false,false,false,true,false,false,true,false],
                [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true],
                [false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false],
                [true,false,false,false,true,false,false,false,true,false,false,false,true,false,false,false],
            ],
            data:[],
            bpm:120,
            eq_values: [3,-3,3,0,7,9,7,4,4,10],
            reverb_value: .1,
            master_volume: 0.3,
            
        };
        this.beats=[];
        this.setBpm = this.setBpm.bind(this);
        this.playLoop = this.playLoop.bind(this);
        this.stopLoop = this.stopLoop.bind(this);
        this.toggleDrum = this.toggleDrum.bind(this);
        this.onSelectInstrument = this.onSelectInstrument.bind(this);
        this.handleVolumeChange=this.handleVolumeChange.bind(this);
        this.handleVolumeState=this.handleVolumeState.bind(this);
        this.handleEqSlider=this.handleEqSlider.bind(this);
        this.handleReverbChange=this.handleReverbChange.bind(this);
        this.handleMasterVolumeChange=this.handleMasterVolumeChange.bind(this)
    };

    componentDidMount(){
        this.setState({ initialized: true });
        this.midiSounds.setBand32(this.state.eq_values[0]);
		this.midiSounds.setBand64(this.state.eq_values[1]);
		this.midiSounds.setBand128(this.state.eq_values[2]);
		this.midiSounds.setBand256(this.state.eq_values[3]);
		this.midiSounds.setBand512(this.state.eq_values[4]);
		this.midiSounds.setBand1k(this.state.eq_values[5]);
		this.midiSounds.setBand2k(this.state.eq_values[6]);
		this.midiSounds.setBand4k(this.state.eq_values[7]);
		this.midiSounds.setBand8k(this.state.eq_values[8]);
		this.midiSounds.setBand16k(this.state.eq_values[9]);
        this.midiSounds.setEchoLevel(this.state.reverb_value);
        this.midiSounds.setMasterVolume(this.state.master_volume);

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
        document.documentElement.style.setProperty("--play-anim8", "playglow");
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
        document.documentElement.style.setProperty("--play-anim8", "none");
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

    handleReverbChange(val){
        this.midiSounds.setEchoLevel(val);
    };

    handleMasterVolumeChange(val){
        this.midiSounds.setMasterVolume(val);
    }

    setBpm(bpm){
        this.state.bpm = bpm
        this.playLoop()
    };

    handleEqSlider(values) {
        this.midiSounds.setBand32(values[0]);
		this.midiSounds.setBand64(values[1]);
		this.midiSounds.setBand128(values[2]);
		this.midiSounds.setBand256(values[3]);
		this.midiSounds.setBand512(values[4]);
		this.midiSounds.setBand1k(values[5]);
		this.midiSounds.setBand2k(values[6]);
		this.midiSounds.setBand4k(values[7]);
		this.midiSounds.setBand8k(values[8]);
		this.midiSounds.setBand16k(values[9]);
    }

    
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
                            handleEqSlider={this.handleEqSlider}
                        />
                        <MasterVolumeContainer 
                            reverb_value={this.state.reverb_value}
                            handleReverbChange={this.handleReverbChange}
                            master_volume={this.state.master_volume}
                            handleMasterVolumeChange={this.handleMasterVolumeChange}
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