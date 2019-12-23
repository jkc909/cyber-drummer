import React, { PureComponent } from 'react';

class DrumSelectors extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            selected: props.selected
        };
    };

    drumSelectHandler(e, iter) {
        this.props.onSelectInstrument(e,iter);
        this.setState({selected: e.target.value});
    }

    render() {

        return(
            <div className="drum-selector-item drum-container-grid-items" key={this.props.iter}>
                <select className="drum-selector" value={this.state.selected} onChange={(e) => this.drumSelectHandler(e,this.props.iter)}>{this.props.selections}</select>
            </div>
        );
    };
};

export default DrumSelectors;