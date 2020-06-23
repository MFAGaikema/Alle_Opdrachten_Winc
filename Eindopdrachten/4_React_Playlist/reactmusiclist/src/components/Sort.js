import React from 'react'

const Sort = (props) => {
  return (
    <form className="sort">
      <select onChange={props.onChange} >
        <option className="empty" value="">Sort by:</option>
        <option value="a-z">a-z</option>
        <option value="z-a">z-a</option>
        <option value="1-5">1-5</option>
        <option value="5-1">5-1</option>
      </select>
    </form>
  )
}

export default Sort
