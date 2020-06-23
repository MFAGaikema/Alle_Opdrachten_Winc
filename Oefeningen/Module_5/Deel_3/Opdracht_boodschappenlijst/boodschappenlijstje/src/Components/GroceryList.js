import React from "react"
import List from "./List"
import HeaderGroceryList from "./Layout/HeaderGroceryList"
import AddItem from "./AddItem"

const GroceryList = (props) => {
        return (
            <div className="grocery-list">
                <HeaderGroceryList />
                <AddItem addItem={props.addItem}/>
                <List itemList={props.items} sendItemToCart={props.sendItemToCart}/>
            </div>     
        )   
    }

export default GroceryList