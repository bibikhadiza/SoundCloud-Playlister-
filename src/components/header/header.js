import React, { Component } from 'react';
import './header.css';
import DropdownSelect from '../dropdown_select/dropdown_select';

class Header extends Component {

  render() {
    return (
      <div className="header">
        <DropdownSelect changeGenre={this.props.onGenreChange}/>
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
};

export default Header;
