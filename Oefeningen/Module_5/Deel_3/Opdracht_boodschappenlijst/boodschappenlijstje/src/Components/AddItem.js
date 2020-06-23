import React, { useState } from 'react'

const AddItem = (props) => {
    const [state, setState] = useState({
            title: ""
        })
    

    const onChange = (e) => {
        setState({...state, title: e.target.value})
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        props.addItem(state.title);
        setState({...state, title: ""})
    }
    
    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="Add Groceries" 
                onChange={onChange}
                value={state.title}
            />
            <input 
                type="submit" 
                value="Submit" 
            />
        </form>
    )
    
}

export default AddItem