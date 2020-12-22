import React from "react";

import { Line } from "react-chartjs-2";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Dec", "Jan", "Feb", "Mar", "Apr"],
        datasets: [
          {
            label: "Player X",
            data: ["45", "65", "52", "86", "60"],
            borderColor: "rgb(0, 107, 179)",
            backgroundColor: "rgba(0, 107, 179, 0.3)",
            fill: true,
            pointRadius: 2,
            borderWidth: 1,
            lineTension: 0,
          },
          {
            label: "Player Y",
            data: ["55", "45", "62", "26", "50"],
            borderColor: "rgb(86, 210, 45)",
            backgroundColor: "rgba(86, 210, 45, 0.4)",
            fill: true,
            pointRadius: 2,
            borderWidth: 1,
            lineTension: 0,
          },
        ],
      },
    };
  }
  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
  };

  render() {
    return (
      <div
        className="chart"
        style={{ position: "relative", width: 600, height: 550, margin: '25px' }}
      >
        <Line
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Comparison between Player X and Player Y",
              fontSize: 25,
              padding: 10,
              fontColor:'white'
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
            },
            scales: {
              yAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: "Attacking",
                  },
                },
              ],
              xAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: "Month",
                  },
                },
              ],
            },
          }}
        />
      </div>
    );
  }
}

export default Chart;
