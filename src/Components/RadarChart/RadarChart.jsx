import React from "react";

import { Radar } from "react-chartjs-2";

class RadarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          "97 / 88",
          "91 / 85",
          "96 / 80",
          "65 / 90",
          "80 / 77",
          "58 / 84",
        ],
        datasets: [
          {
            label: "Player X",
            data: ["45", "65", "52", "86", "60"],
            borderColor: "rgb(0, 107, 179)",
            backgroundColor: "rgba(0, 107, 179, 0.3)",
            fill: true,
          },
          {
            label: "Player Y",
            data: ["55", "45", "62", "26", "50"],
            borderColor: "rgb(86, 210, 45)",
            backgroundColor: "rgba(86, 210, 45, 0.4)",
            fill: true,
          },
        ],
      },
    };
  }
  static defaultProps = {
    displayLegend: true,
    legendPosition: "right",
  };

  render() {
    return (
      <div
        className="chart"
        style={{
          position: "relative",
          width: 600,
          height: 550,
          margin: "25px",
        }}
      >
        <Radar
          data={this.state.chartData}
          options={{
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
            },
            scales: {
              yAxes: [
                {
                  display: false,
                  gridLines: {
                    display: false,
                  },
                  scaleLabel: {
                    display: true,
                    labelString: "Attacking",
                  },
                },
              ],
              xAxes: [
                {
                  display: false,
                  gridLines: {
                    display: false,
                  },
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

export default RadarChart;
