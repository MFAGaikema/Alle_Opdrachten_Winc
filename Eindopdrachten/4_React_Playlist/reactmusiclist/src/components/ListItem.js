import React from "react";

const ListItem = (props) => {
  
    const { artist, song, genre, rating, id } = props.item;
    return (
      <li className="music-item">
        <p>{artist}</p>
        <p>{song}</p>
        <p>{genre}</p>
        <p className="rating">{rating}</p>
        <button
          onClick={props.delItem.bind(this, id)}
          className="delbtn"
        >
          X
        </button>
      </li>
    );
  }


export default ListItem;
