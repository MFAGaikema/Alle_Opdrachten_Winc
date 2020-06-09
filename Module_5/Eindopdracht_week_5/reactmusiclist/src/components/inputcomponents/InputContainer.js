import React, { Component } from "react";
import InputComponent from "./InputComponent"

class InputContainer extends Component {
  constructor() {
    super();
    this.state = {
      artist: "",
      song: "",
      genre: "",
      rating: "",
    };
  }
  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (e) => {
    const { artist, song, genre, rating } = this.state;
    e.preventDefault();
    this.props.addItem(artist, song, genre, rating);
    this.setState({ artist: "", song: "", genre: "", rating: "" });
  };

  render() {
    return (
      <div onSubmit={this.onSubmit}>
        <InputComponent onSubmit={this.onSubmit} onChange={this.onChange} data={this.state}/>
      </div> 
    );
  }
}

export default InputContainer;
