import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid'

import SetBpmButton from '../tiles/buttons/SetBpmButton'

class BpmContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            bpm: props.bpm,
            disabled: true,
        }
        this.handleChangeBpm = this.handleChangeBpm.bind(this)
        this.handleBpmButton = this.handleBpmButton.bind(this)
    }

    handleChangeBpm(event){
        this.setState({ 
            bpm: event.target.value,
            disabled: false,
        })
    }

    handleBpmButton(){
        this.props.setBpm(this.state.bpm)
        setTimeout(this.setState({ disabled: true}), 1000);
        
    }

    render(){

        return(
            <div>
                <Grid 
                    container spacing={2} 
                    alignItems="center"
                >   
                    <Grid item width={1}>
                        <div className="tempo-blink tempo-item ">BPM</div>
                    </Grid>
                    <Grid item>
                        <input 
                            className="bpm" 
                            type="number" 
                            name="bpm" 
                            min="40"
                            max="250"
                            value={this.state.bpm}
                            onChange={this.handleChangeBpm}></input>
                    </Grid>
                    <Grid item>
                    <SetBpmButton 
                        disabled={this.state.disabled}
                        handleBpmButton={this.handleBpmButton}
                    />
                    </Grid>
                </Grid>
            
            </div>
        )
    };
};

export default BpmContainer;