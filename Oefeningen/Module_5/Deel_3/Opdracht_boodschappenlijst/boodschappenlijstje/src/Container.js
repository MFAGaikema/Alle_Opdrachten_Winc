import React, {Component} from "react"
import ShoppingCart from "./Components/ShoppingCart"
import GroceryList from "./Components/GroceryList"

class Container extends Component {
    constructor() {
        super()
        this.state =  {
            groceryItems: [],
            shoppinglistItems : []    
        }     
    }

    addItem = (title) => {
        const newItem = {
            id: this.state.groceryItems.length + 1,
            title
        }               
        this.setState( {groceryItems: [...this.state.groceryItems, newItem]} )
    }

    sendItemToCart = (id, title) => { //dit moet nog een if statement worden
        const sendItem = {
            id,
            title,
            amount: 1 
        }               
        this.setState( {shoppinglistItems: [...this.state.shoppinglistItems, sendItem]} )
    }
    
    delItems = () => {
        this.setState( {shoppinglistItems: []})
    }

    render () {
        return (
            <div className="container">
                <GroceryList items={this.state.groceryItems} addItem={this.addItem} sendItemToCart={this.sendItemToCart}/>
                <ShoppingCart items={this.state.shoppinglistItems} delItems={this.delItems}/>   
            </div>
        )
    }
}

export default Container 