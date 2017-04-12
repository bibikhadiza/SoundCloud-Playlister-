import React, { Component } from 'react';
import './search.css';

class Search extends Component {
  constructor(){
    super();

  }


  render() {
    return (
      <form action='' onSubmit={this.props.handleSubmit} className="app-form">
        <input type='text'
         placeholder='Search...'
         value={this.props.value}
         onChange={this.props.handleChange}
         className='app-form__input'/>
      </form>
    );
  }
}

export default Search;
