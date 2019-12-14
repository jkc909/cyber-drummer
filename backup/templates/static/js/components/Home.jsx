import React, { Component } from 'react';
import MIDISounds from 'midi-sounds-react';

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


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            drums:{ kick:6, snare:17 },
            hit:56,
            bass:437, 
            synth:521,
            tracks:[
                [true,false,false,false,true,false,false,false,true,false,false,false,true,false,false,false]
            ],
            data:[],
            bpm:120,
            
        }
        this.beats=[];
    }

    componentDidMount() {
        this.setState({ initialized: true });
        this.fillBeat()
    }

    playTestInstrument() {
        this.midiSounds.playChordNow(3, [60], 2.5);
    }

    playLoop(){
        let bpm = this.state.bpm
        let bps = 60/bpm
        this.fillBeat();
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
            if(this.state.tracks[0][i]){drums.push(this.state.drums.kick);}
            let beat=[drums,[]];
            this.beats[i]=beat;
        }
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

    moveTempo(){
        this.setState({ bpm: event.target.value })
    }

    setTempo(){
        this.stopLoop()
        this.playLoop()
    }

    playThing(){
        let data=[
            [[this.state.drums.kick,this.state.drums.snare],[[this.state.bass,[O*3+C],1/16],[this.state.hit,[O*5+C],1/4],[this.state.synth,[O*3+C],1/1],[this.state.synth,[O*4+C],1/1],[this.state.synth,[O*3+G],1/1],[this.state.synth,[O*5+C],1/2],[this.state.synth,[O*5+d],3/8]]]
        ]
    
        this.midiSounds.startPlayLoop(data, 120, 1/4, this.midiSounds.beatIndex);
    }
    
    render() {

        let sequence = []
        this.state.tracks.forEach ((t,i) => {
            let iter = i
            t.forEach ((n,i) => {
                sequence.push( 
                    <div key={`note_${i}`}>
                        <input className="sequence-item" type="checkbox" defaultChecked={n} onChange={(e)=>this.toggleDrum(iter,i)} />
                    </div>
                )
            })
        })

        let led_row = []
        for(let i=0;i<16;i++){
            led_row.push(
                    <div key={i} className = {`seq-step`}>{i+1}</div>
            )
        }



        return (
            <div>
                <div>
                    <button onClick={this.playTestInstrument.bind(this)}>PLAY</button>
                </div>
                <div>
                    <div className="sequence-container">
                        {led_row}
                        {sequence}
                    </div>
                    <p>
                        <button onClick={this.playLoop.bind(this)}>PLAY</button>
                        <button onClick={this.stopLoop.bind(this)}>STOP</button>
                        <button onClick={this.echoToggle.bind(this)}>ECHO</button>
                        <button onClick={this.playThing.bind(this)}>THING</button>
                    </p>
                    <div className="tempo-blink"></div>
                    <input type='range' orient='vertical' value={this.state.bpm} min={30} max={200} step={1} onChange={this.moveTempo.bind(this)} />
                    <button onClick={this.setTempo.bind(this)}>SET TEMPO {this.state.bpm}</button>
                </div>
                <div>
                    <div className="hide-div">
                        <MIDISounds ref={(ref) => (this.midiSounds = ref)} instruments={[this.state.bass,this.state.synth]} drums={[this.state.drums.kick,this.state.drums.snare]}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;