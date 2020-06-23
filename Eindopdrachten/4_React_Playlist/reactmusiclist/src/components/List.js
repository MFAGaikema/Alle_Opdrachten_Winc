import React from "react";
import ListItem from "./ListItem";

const List = (props) => {
  
    return props.music.map((item) => (
      <ListItem key={item.id} item={item} delItem={props.delItem} />
    ));
  }


export default List;
