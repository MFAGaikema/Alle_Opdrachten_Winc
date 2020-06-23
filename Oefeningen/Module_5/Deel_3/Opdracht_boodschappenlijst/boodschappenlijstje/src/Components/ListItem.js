import React from "react"

const ListItem = (props) => {
        const listStyle = {
            listStyleType: "none",
            color: "red"
        }
        
        const { title, id, amount } = props.item
        const spanStyle = {
            float: "right"
        }

        return (
            <li style={listStyle} onClick={props.sendItemToCart.bind(this, id, title)}><p>{title}<span style={spanStyle}>{amount}</span></p></li>
        )
    }

export default ListItem 