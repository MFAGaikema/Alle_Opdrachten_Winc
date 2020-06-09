import React from 'react'

const InputComponent = (props) => {
  return (
    <form className="inputform">
      <input
        className="input"
        type="text"
        name="artist"
        placeholder="Artist"
        value={props.data.artist}
        onChange={props.onChange}
        required
      />
      <input
        className="input"
        type="text"
        name="song"
        placeholder="Song"
        value={props.data.song}
        onChange={props.onChange}
        required
      />
      <select
        className="genre"
        name="genre"
        value={props.data.genre}
        onChange={props.onChange}
        required
      >
        <option className="empty" value="" disabled>
          Genre
        </option>
        <option value="Punk">Punk</option>
        <option value="Metal">Metal</option>
        <option value="Rock">Rock</option>
        <option value="Classic">Classic</option>
        <option value="Reggae">Reggae</option>
      </select>
      <select
        className="rating"
        name="rating"
        value={props.data.rating}
        onChange={props.onChange}
        required
      >
        <option className="empty" value="" disabled>
          Rating
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <input type="submit" value="Submit" className="submitbtn" />
    </form>
  )
}

export default InputComponent