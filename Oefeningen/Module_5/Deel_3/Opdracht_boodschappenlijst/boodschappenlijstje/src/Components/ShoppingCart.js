import React from "react"
import HeaderShoppingCart from "./Layout/HeaderShoppingCart"
import List from "./List"

const ShoppingCart = (props) => {
    const sendItemToCart = () => {
        console.log("it works")
    }

    return (
        <div className="shopping-cart">
            <HeaderShoppingCart />
            <button className="delbtn" onClick={props.delItems}>DELETE</button>
            <List itemList={props.items} sendItemToCart={sendItemToCart}/>           
        </div>
    )
}

export default ShoppingCart