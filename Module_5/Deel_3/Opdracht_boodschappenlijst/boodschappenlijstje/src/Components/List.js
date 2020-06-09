import React from "react"
import ListItem from "./ListItem"

const List = (props) => {
    return props.itemList ? props.itemList.map(item => <ListItem key={item.id} item={item} sendItemToCart={props.sendItemToCart}/>
    ) : " ";
}

export default List 