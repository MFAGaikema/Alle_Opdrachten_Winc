import React, { Component } from "react";
import "./../styling/MainContainer.css";
import Navbar from "./layout/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from "react-router-dom";
import { Bar } from "react-chartjs-2";
import Averages from "./components/Averages";
import Assignments from "./components/Assignments";
import getStudentData from "./data/GetStudentData";

class MainContainer extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Averages />
            </Route>
            <Route path="/Assignments">
              <Assignments />
            </Route>
            <Route path="/:id" children={<Child />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const Child = () => {
  let { id } = useParams();
  const chartData = {
    labels: getStudentData(
      id,
      "Welke opdracht of welk project lever je nu in?"
    ),
    datasets: [
      {
        label: "Hoe leuk vond je deze opdracht?",
        data: getStudentData(id, "Hoe leuk vond je deze opdracht?"),
        backgroundColor: "#4287f5",
      },
      {
        label: "Hoe moeilijk vond je deze opdracht?",
        data: getStudentData(id, "Hoe moeilijk vond je deze opdracht?"),
        backgroundColor: "#f01118",
      },
    ],
  };

  return (
    <div>
      <p>Dit zijn de persoonlijke resultaten van {id}.</p>
      <Bar
        data={chartData}
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
};

export default MainContainer;
