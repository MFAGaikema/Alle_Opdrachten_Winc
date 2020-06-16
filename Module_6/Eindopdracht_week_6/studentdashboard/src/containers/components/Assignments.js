import React, { Component } from 'react'
import { Bar } from "react-chartjs-2"
import "./../../styling/Assignments.css" 
import filterAssignments from "../data/FilterAssignments"
import studentAssignments from "../data/studentsGrades"

export class assignments extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {
        labels: studentAssignments("SCRUM", "Wie ben je?"),
        datasets: [
          {
            label: "Hoe leuk vond je deze opdracht?",
            data: [],
            backgroundColor: "#4287f5",
          },
          {
            label: "Hoe moeilijk vond je deze opdracht?",
            data: [],
            backgroundColor: "#f01118",
          },
        ],
      },
    };
  }

  handleChange = (e) => {
    const assignments = e.target.value;
    const newState = Object.assign({}, this.state);
    newState.chartData.datasets[0].data = studentAssignments(assignments, "Hoe leuk vond je deze opdracht?");
    newState.chartData.datasets[1].data = studentAssignments(assignments, "Hoe moeilijk vond je deze opdracht?");
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <p>Dit zijn de resultaten per opdracht, in de grafiek is te zien welke cijfers iedere student heeft gegeven.</p>
        <select value={this.state.data} onChange={this.handleChange}>
          <option className="Empty" value="">Kies een opdracht:</option>
          {filterAssignments.map(item => 
            <option onClick={this.handleClick}key={item} value={item}>{item}</option>
        )}
        </select>
        <div>
        <Bar
          data={this.state.chartData}
          width={100}
          height={22}
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
      </div>
    )
  }
}

export default assignments
