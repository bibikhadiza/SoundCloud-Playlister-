import React, { Component } from 'react';
import './search.css';
import GoHome from 'react-icons/lib/go/home'

class Search extends Component {
  constructor(){
    super();

  }


  render() {
    return (
      <div className="header">

        <select className="form-control" >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
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

export default Search;
