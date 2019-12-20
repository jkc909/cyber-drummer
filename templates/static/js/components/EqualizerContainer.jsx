import React, { Component } from 'react';
import EqualizerGraph from './EqualizerGraph.jsx'
import EqualizerSliders from './EqualizerSliders.jsx'

class EqualizerContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            eq_values: props.eq_values
        };
        this.handleSliderMove=this.handleSliderMove.bind(this)
    };

    handleSliderMove(e,iter) {
        let slider_state=this.state.eq_values
        slider_state[iter]=parseInt(e.target.value)
        this.setState({ eq_values: slider_state })
    }


    

    render() {

        // const data = [
        //     ["Year", "Sales"],
        //     ["2004", 1000],
        //     ["2005", 1170],
        //     ["2006", 660],
        //     ["2007", 890],
        //     ["2008", 556],
        //     ["2009", 228],
        //     ["2010", 906],
        //     ["2011", 1130],
        //     ["2012", 1433],
        //     ["2013", 1030],
        //   ];

        // let data = this.state.eq_values.map((v,i)=>[`band ${i}`,parseInt(v)])

        let data = [["band","value"]]
        this.state.eq_values.forEach((v,i) => {
            data.push([`${i}`,parseInt(v)])
        });

        let sliders = this.state.eq_values.map((v,i) =>{
           return <div key={i}>
                <EqualizerSliders 
                    handleSliderMove={this.handleSliderMove}
                    value={v}
                    iter={i}
                />
            </div>
        })


        return(
            <div className="equalizer-container">
                <div className="eq-label equalizer-item">EQUALIZER</div>
                <div className="equalizer-item">
                    <div className="eq-slider-container">{sliders}</div>
                </div>
                <div className="equalizer-item">
                    <EqualizerGraph 
                        data={data}
                    />
                </div>
            </div>
        );
    };
};

export default EqualizerContainer;