import React, { Component } from "react";
import List from "./components/List";
import InputContainer from "./components/inputcomponents/InputContainer";
import Sort from "./components/Sort"
import { v4 as uuidv4 } from "uuid";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      musicList: [],
      sort: ''
    };
  }

  delItem = (id) => {
    this.setState({
      musicList: [
        ...this.state.musicList.filter((item) => item.id !== id),
      ],
    });
  };

  addItem = (artist, song, genre, rating) => {
    const newItem = { id: uuidv4(), artist, song, genre, rating };
    this.setState({ musicList: [...this.state.musicList, newItem] });
  };

  orderOfList = (e) => {
    this.setState({ sort: e.target.value })
  };

  render() {
    const newArray = this.state.musicList.sort((a,b) => {
      const artistLowA = a.artist.toUpperCase(); 
      const artistLowB = b.artist.toUpperCase();
      if(this.state.sort === "a-z") {
        return artistLowA < artistLowB ? -1 : 1
      } else if(this.state.sort === "z-a") {
        return artistLowA > artistLowB ? -1 : 1
      } else if(this.state.sort === "1-5") {
        return a.rating < b.rating ? -1 : 1
      } else if(this.state.sort === "5-1") {
        return a.rating < b.rating ? 1 : -1
      }           
    })

    return (
      <div className="container">
        <h1 className="home">Home</h1>
        <Sort onChange={this.orderOfList}/>
        <InputContainer addItem={this.addItem} />
        <List music={newArray} delItem={this.delItem} />
      </div>
    );
  }
}

export default Container;
