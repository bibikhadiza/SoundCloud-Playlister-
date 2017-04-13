import React, { Component } from 'react';
import './header.css';
import GoHome from 'react-icons/lib/go/home'


const options = [["alternativerock", "Alternative Rock"], ["ambient", "Ambient"], ["classical", "Classical"], ["country", "Country"], ["danceedm", "Dance & EDM"], ["dancehall", "Dancehall"], ["deephouse", 'Deep House'], ["disco", "Disco"], ["drumbass", "Drum & Bass"], ["dubstep", "Dubstep"], ["electronic", "Electric"], ["folksingersongwriter", " Folk & Singer-Songwriter"], ["hiphoprap", "Hip Hop & Rock"], ["house", "House"], ["indie", "Indie"], ["jazzblues", "Jazz & Blues"], ["latin", "Latin"], ["metal", "Metal"], ["piano", "Piano"], ["pop", "Pop"], ["rbsoul", "R&B & Soul"], ["reggae", "Raggae"], ["reggaeton", "Raggaeton"], ["rock", "Rock"], ["soundtrack", "Soundtrack"], ["techno", "Techno"], ["trance", "Trance"], ["trap", "Trap"], ["triphop", "Traphop"], ["world", 'World']]

class Header extends Component {
  constructor(){
    super();
  }

  render() {
    const optionItems = options.map((opt) => <option value={opt[0]}>{opt[1]}</option>)
    return (
      <div className="header">
        <select className="form-control">
          {optionItems}
        </select>

      <form action='' onSubmit={this.props.handleSubmit} className="wrap">
        <input type='text'
         placeholder='Search...'
         value={this.props.value}
         onChange={this.props.handleChange}
         className='searchTerm'/>
      </form>

      <div className="icons">
        <a href="https://github.com/bibikhadiza/SoundCloud-Playlister-" target="_blank"><i className="fa fa-github"></i></a>
        <a href="https://www.linkedin.com/in/bibi-khadiza/" target="_blank"><i className="fa fa-linkedin-square"></i></a>
      </div>

    </div>
    );
  }
}

export default Header;
