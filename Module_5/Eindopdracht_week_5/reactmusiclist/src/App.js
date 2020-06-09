import React from "react";
import "./App.css";
import MainContainer from "./MainContainer";
import Header from "./layout/Header";
import About from "./pages/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <MainContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
