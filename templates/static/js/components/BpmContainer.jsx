import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

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

    handleChangeBpm(){
        this.setState({ 
            bpm: event.target.value,
            disabled: false,
        })
    }

    handleBpmButton(){
        this.props.setBpm(this.state.bpm)
        this.setState({ disabled: true})
    }

    render(){

        let hello="disabled"
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
                    <Grid>
                        <Button
                            variant="outlined"
                            disabled={this.state.disabled}
                            onClick={this.handleBpmButton}
                        >
                            Set Tempo
                        </Button>
                    </Grid>
                </Grid>
            
            </div>
        )
    };
};

export default BpmContainer;