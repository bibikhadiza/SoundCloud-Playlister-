import React, {Component} from 'react';
import './dropdown_select.css';


const DropdownSelect = ({ results, changeGenre}) => {

  const options = [["alternativerock", "Alternative Rock"], ["ambient", "Ambient"], ["classical", "Classical"], ["country", "Country"], ["danceedm", "Dance & EDM"], ["dancehall", "Dancehall"], ["deephouse", 'Deep House'], ["disco", "Disco"], ["drumbass", "Drum & Bass"], ["dubstep", "Dubstep"], ["electronic", "Electric"], ["folksingersongwriter", " Folk & Singer-Songwriter"], ["hiphoprap", "Hip Hop & Rock"], ["house", "House"], ["indie", "Indie"], ["jazzblues", "Jazz & Blues"], ["latin", "Latin"], ["metal", "Metal"], ["piano", "Piano"], ["pop", "Pop"], ["rbsoul", "R&B & Soul"], ["reggae", "Raggae"], ["reggaeton", "Raggaeton"], ["rock", "Rock"], ["soundtrack", "Soundtrack"], ["techno", "Techno"], ["trance", "Trance"], ["trap", "Trap"], ["triphop", "Traphop"], ["world", 'World']]

  const optionItems = options.map((opt) => {
      return <option value={opt[0]}>{opt[1]}</option>
  })

  return(<div>
        <select className="form-control" onChange={changeGenre}>
          {optionItems}
        </select>
      </div>
      )
};

export default DropdownSelect;
