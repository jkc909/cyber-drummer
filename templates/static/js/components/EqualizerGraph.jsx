import React from "react";
import Chart from "react-google-charts";
// Ref : https://developers.google.com/chart/interactive/docs/gallery/histogram


const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
  colors: ['#6bf6f9'],
  backgroundColor: '#191919',
  chartArea: {'width': '100%', 'height': '100%'},
  enableInteractivity: false,
  vAxis: {
    viewWindowMode:'explicit',
    viewWindow: {
      max:30,
      min:-30,
    },
},}
class EqualizerGraph extends React.Component {
    constructor(props){
        super(props)
    }
  render() {
        
    return (
      <div className="eq-graph">
        <Chart
          chartType="LineChart"
          width="250px"
          height="100px"
          data={this.props.data}
          options={options}
        />
      </div>
    );
  }
}

export default EqualizerGraph;
