import React from 'react';
import './styling/App.css';
import Header from "./containers/layout/Header"
import MainContainer from "./containers/MainContainer"
import Footer from "./containers/layout/Footer"


const App = () => {
  return (
    <div className="App">
      <Header />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;