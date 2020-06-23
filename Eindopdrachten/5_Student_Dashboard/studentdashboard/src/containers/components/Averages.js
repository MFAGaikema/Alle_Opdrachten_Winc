import React, {Component} from 'react'
import { Bar } from "react-chartjs-2"
import getOverallAverages from '../data/GetOverallAverages'
import filterAssignments from '../data/FilterAssignments'


class Averages extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {
        labels: filterAssignments,
        datasets: [
          {
            label: "Hoe leuk vond je deze opdracht?",
            data: getOverallAverages("Hoe leuk vond je deze opdracht?"),
            backgroundColor: "#4287f5",
          },
          {
            label: "Hoe moeilijk vond je deze opdracht?",
            data: getOverallAverages("Hoe moeilijk vond je deze opdracht?"),
            backgroundColor: "#f01118",
          },
        ],
      },
    };
  }
  render() {
    return (
      <div>
        <p>Dit zijn de resultaten van alle opdrachten met de gemiddelde cijfers die de studenten hebben gegeven.</p>
        <Bar
          data={this.state.chartData}
          width={100}
          height={25}
          options={{
            scales: {
              yAxes: [
                {
                  ticks: {
                    min: 0,
                    max: 5,
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

export default Averages
